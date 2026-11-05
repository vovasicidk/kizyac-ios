import Foundation
import WebKit

final class NativeBridge: NSObject, WKScriptMessageHandler {
    weak var viewController: UIViewController?
    weak var webView: WKWebView?
    
    init(viewController: UIViewController) {
        self.viewController = viewController
        super.init()
    }
    
    func generateUserScript() -> WKUserScript {
        let savedState = SaveManager.shared.load()
        let encodedSavedState: String
        if let data = try? JSONSerialization.data(withJSONObject: [savedState]),
           let str = String(data: data, encoding: .utf8),
           str.count >= 2 {
            encodedSavedState = String(str.dropFirst().dropLast())
        } else {
            encodedSavedState = "\"\""
        }
        
        let jsSource = """
        (function() {
            window.__INITIAL_SAVE__ = \(encodedSavedState);
            
            var style = document.createElement('style');
            style.textContent = `
                * { -webkit-touch-callout: none !important; }
                input, textarea { -webkit-user-select: auto !important; }
                body {
                    padding-top: env(safe-area-inset-top) !important;
                    box-sizing: border-box !important;
                }
                body[data-page="reactor"] {
                    height: 100vh !important;
                    height: 100dvh !important;
                }
            `;
            if (document.head) {
                document.head.appendChild(style);
            } else {
                document.addEventListener('DOMContentLoaded', function() {
                    document.head.appendChild(style);
                });
            }
            
            window.Native = {
                isProtectedStorage: function() { return true; },
                hasAmplitudeControl: function() { return true; },
                load: function() {
                    return window.__INITIAL_SAVE__ || "";
                },
                save: function(data) {
                    window.__INITIAL_SAVE__ = data;
                    try { localStorage.setItem('kizyac_saved_state', data); } catch(e){}
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'save', data: data });
                    }
                    return true;
                },
                playSound: function(name) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'playSound', name: name });
                    }
                    return true;
                },
                playEffect: function(name, category, volume) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({
                            action: 'playEffect',
                            name: name,
                            category: category,
                            volume: (typeof volume === 'number' ? volume : 0.8)
                        });
                    }
                    return true;
                },
                haptic: function() {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'haptic', level: 0 });
                    }
                },
                hapticLevel: function(level) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'haptic', level: level });
                    }
                },
                exportSave: function(data) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'exportSave', data: data });
                    }
                },
                importSave: function() {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'importSave' });
                    }
                },
                musicCommand: function(cmd, param) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'musicCommand', command: cmd, param: param });
                    }
                },
                getMusicState: function() {
                    return "{}";
                },
                clearMusicAfterReset: function() {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.Native) {
                        window.webkit.messageHandlers.Native.postMessage({ action: 'clearMusicAfterReset' });
                    }
                },
                hasCheatAccess: function() { return true; },
                getCheatChallenge: function() { return ""; },
                renewCheatChallenge: function() { return ""; },
                cheatWaitSeconds: function() { return 0; },
                approveCheatAction: function() { return true; },
                copyCheatChallenge: function() {},
                allowStateImport: function() { return true; },
                finishBackupSetup: function() {},
                flushBackup: function() {},
                getBackupStatus: function() { return ""; },
                selectBackupFolder: function() {},
                unlockCheats: function(challenge, response) {
                    setTimeout(function() {
                        if (window.Kizyac && window.Kizyac.onCheatAuth) {
                            window.Kizyac.onCheatAuth(JSON.stringify({ request: response, ok: true, waitSeconds: 0 }));
                        }
                    }, 50);
                }
            };
        })();
        """
        
        return WKUserScript(source: jsSource, injectionTime: .atDocumentStart, forMainFrameOnly: true)
    }
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "Native",
              let body = message.body as? [String: Any],
              let action = body["action"] as? String else {
            return
        }
        
        switch action {
        case "playSound":
            if let name = body["name"] as? String {
                SoundManager.shared.playSound(name: name)
            }
            
        case "playEffect":
            if let name = body["name"] as? String {
                let cat = body["category"] as? String
                let vol = body["volume"] as? Double ?? 0.8
                SoundManager.shared.playEffect(name: name, category: cat, volume: vol)
            }
            
        case "haptic":
            let level = body["level"] as? Int ?? 0
            HapticsManager.shared.trigger(level: level)
            
        case "save":
            if let data = body["data"] as? String {
                _ = SaveManager.shared.save(data: data)
            }
            
        case "exportSave":
            if let data = body["data"] as? String, let vc = viewController {
                SaveManager.shared.exportSave(data: data, from: vc)
            }
            
        case "importSave":
            if let vc = viewController {
                SaveManager.shared.importSave(from: vc) { [weak self] importedData in
                    guard let self = self,
                          let encoded = try? JSONSerialization.data(withJSONObject: [importedData]),
                          let str = String(data: encoded, encoding: .utf8) else {
                        return
                    }
                    let inner = str.dropFirst().dropLast()
                    let js = "window.Kizyac && window.Kizyac.receiveImport && window.Kizyac.receiveImport(\(inner));"
                    self.webView?.evaluateJavaScript(js, completionHandler: nil)
                }
            }
            
        case "musicCommand":
            if let cmd = body["command"] as? String {
                let param = body["param"] as? String ?? ""
                MusicManager.shared.command(cmd: cmd, param: param)
            }
            
        case "clearMusicAfterReset":
            MusicManager.shared.reset()
            
        default:
            break
        }
    }
}
