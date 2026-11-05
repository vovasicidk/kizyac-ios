import UIKit
import WebKit

final class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    private var webView: WKWebView!
    private var bridge: NativeBridge!
    
    override var prefersStatusBarHidden: Bool {
        return false
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
    
    override var supportedInterfaceOrientations: UIInterfaceOrientationMask {
        return .portrait
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        view.backgroundColor = UIColor(red: 11/255, green: 16/255, blue: 14/255, alpha: 1.0)
        
        setupBridgeAndWebView()
        loadWebContent()
        setupLifecycleObservers()
    }
    
    private func setupBridgeAndWebView() {
        bridge = NativeBridge(viewController: self)
        
        let config = WKWebViewConfiguration()
        let contentController = WKUserContentController()
        
        contentController.add(bridge, name: "Native")
        contentController.addUserScript(bridge.generateUserScript())
        
        config.userContentController = contentController
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.setValue(true, forKey: "allowFileAccessFromFileURLs")
        
        // Full screen edge-to-edge
        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 11/255, green: 16/255, blue: 14/255, alpha: 1.0)
        
        // Enable scrolling so upgrades and long lists swipe vertically
        webView.scrollView.isScrollEnabled = true
        webView.scrollView.bounces = true
        webView.scrollView.alwaysBounceVertical = false
        webView.scrollView.showsHorizontalScrollIndicator = false
        webView.scrollView.showsVerticalScrollIndicator = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        
        bridge.webView = webView
        MusicManager.shared.setWebView(webView)
        
        view.addSubview(webView)
    }
    
    private func loadWebContent() {
        guard let webURL = Bundle.main.url(forResource: "Web", withExtension: nil) ?? Bundle.main.resourceURL?.appendingPathComponent("Web"),
              let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Web")
                ?? Bundle.main.url(forResource: "index", withExtension: "html") else {
            print("Failed to locate Web directory or index.html in bundle")
            return
        }
        
        webView.loadFileURL(indexURL, allowingReadAccessTo: webURL)
    }
    
    private func setupLifecycleObservers() {
        NotificationCenter.default.addObserver(self, selector: #selector(appDidEnterBackground), name: UIApplication.didEnterBackgroundNotification, object: nil)
        NotificationCenter.default.addObserver(self, selector: #selector(appDidBecomeActive), name: UIApplication.didBecomeActiveNotification, object: nil)
    }
    
    @objc private func appDidEnterBackground() {
        webView.evaluateJavaScript("window.Kizyac && window.Kizyac.pause && window.Kizyac.pause();", completionHandler: nil)
    }
    
    @objc private func appDidBecomeActive() {
        webView.evaluateJavaScript("window.Kizyac && window.Kizyac.resume && window.Kizyac.resume();", completionHandler: nil)
    }
    
    deinit {
        NotificationCenter.default.removeObserver(self)
    }
}
