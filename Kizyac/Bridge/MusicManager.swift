import Foundation
import AVFoundation
import WebKit

final class MusicManager: NSObject, AVAudioPlayerDelegate {
    static let shared = MusicManager()
    
    weak var webView: WKWebView?
    private var player: AVAudioPlayer?
    private var playlist: [String] = ["builtin-v2", "builtin-v3"]
    private var currentIndex: Int = 0
    private var repeatMode: String = "all" // "all", "one", "off"
    private var volume: Float = 1.0
    private var isPlaying: Bool = false
    private var updateTimer: Timer?
    
    private override init() {
        super.init()
    }
    
    func setWebView(_ view: WKWebView) {
        self.webView = view
    }
    
    func command(cmd: String, param: String) {
        switch cmd {
        case "configure":
            configure(jsonString: param)
        case "play":
            play()
        case "pause":
            pause()
        case "next":
            next()
        case "previous":
            previous()
        case "volume":
            if let vol = Float(param) {
                setVolume(vol)
            }
        case "repeat":
            repeatMode = param
            broadcastState()
        case "seek":
            if let pos = Double(param) {
                seek(to: pos)
            }
        default:
            break
        }
    }
    
    private func configure(jsonString: String) {
        guard let data = jsonString.data(using: .utf8),
              let json = try? JSONSerialization.jsonObject(with: data) as? [String: Any] else {
            return
        }
        
        if let vol = json["volume"] as? Double {
            self.volume = Float(vol)
            player?.volume = self.volume
        }
        
        if let rep = json["repeat"] as? String {
            self.repeatMode = rep
        }
        
        if let tracks = json["tracks"] as? [String], !tracks.isEmpty {
            self.playlist = tracks
        }
        
        if let currentTrack = json["track"] as? String,
           let idx = playlist.firstIndex(of: currentTrack) {
            if idx != currentIndex || player == nil {
                currentIndex = idx
                loadTrack(id: currentTrack)
            }
        } else if player == nil && !playlist.isEmpty {
            loadTrack(id: playlist[0])
        }
        
        if let shouldPlay = json["playing"] as? Bool {
            if shouldPlay { play() } else { pause() }
        } else {
            broadcastState()
        }
    }
    
    private func loadTrack(id: String) {
        let filename: String
        switch id {
        case "builtin-v2": filename = "kz_track_v2"
        case "builtin-v3": filename = "kz_track_v3"
        default: filename = id
        }
        
        guard let url = Bundle.main.url(forResource: filename, withExtension: "m4a", subdirectory: "Sounds")
                ?? Bundle.main.url(forResource: filename, withExtension: "m4a")
                ?? Bundle.main.url(forResource: filename, withExtension: "wav", subdirectory: "Sounds")
                ?? Bundle.main.url(forResource: filename, withExtension: "wav") else {
            broadcastState(error: "Track file not found")
            return
        }
        
        do {
            player = try AVAudioPlayer(contentsOf: url)
            player?.delegate = self
            player?.volume = volume
            player?.prepareToPlay()
            broadcastState()
        } catch {
            broadcastState(error: error.localizedDescription)
        }
    }
    
    func play() {
        if player == nil && !playlist.isEmpty {
            loadTrack(id: playlist[currentIndex])
        }
        player?.play()
        isPlaying = true
        startTimer()
        broadcastState()
    }
    
    func pause() {
        player?.pause()
        isPlaying = false
        stopTimer()
        broadcastState()
    }
    
    func next() {
        guard !playlist.isEmpty else { return }
        currentIndex = (currentIndex + 1) % playlist.count
        loadTrack(id: playlist[currentIndex])
        if isPlaying {
            player?.play()
        }
        broadcastState()
    }
    
    func previous() {
        guard !playlist.isEmpty else { return }
        currentIndex = (currentIndex - 1 + playlist.count) % playlist.count
        loadTrack(id: playlist[currentIndex])
        if isPlaying {
            player?.play()
        }
        broadcastState()
    }
    
    func setVolume(_ vol: Float) {
        self.volume = max(0.0, min(1.0, vol))
        player?.volume = self.volume
        broadcastState()
    }
    
    func seek(to seconds: Double) {
        player?.currentTime = seconds
        broadcastState()
    }
    
    func reset() {
        pause()
        player = nil
        currentIndex = 0
        broadcastState()
    }
    
    private func startTimer() {
        stopTimer()
        updateTimer = Timer.scheduledTimer(withTimeInterval: 0.5, repeats: true) { [weak self] _ in
            self?.broadcastState()
        }
    }
    
    private func stopTimer() {
        updateTimer?.invalidate()
        updateTimer = nil
    }
    
    func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer, successfully flag: Bool) {
        if repeatMode == "one" {
            player.currentTime = 0
            player.play()
        } else if repeatMode == "all" {
            next()
        } else {
            pause()
        }
    }
    
    func broadcastState(error: String? = nil) {
        let currentTrackId = playlist.indices.contains(currentIndex) ? playlist[currentIndex] : ""
        let state: [String: Any] = [
            "track": currentTrackId,
            "activeId": currentTrackId,
            "position": player?.currentTime ?? 0,
            "duration": player?.duration ?? 0,
            "playing": player?.isPlaying ?? false,
            "loading": false,
            "volume": Double(volume),
            "repeat": repeatMode,
            "error": error ?? ""
        ]
        
        guard let jsonData = try? JSONSerialization.data(withJSONObject: state),
              let jsonStr = String(data: jsonData, encoding: .utf8) else {
            return
        }
        
        DispatchQueue.main.async { [weak self] in
            let js = "window.Kizyac && window.Kizyac.onMusicState && window.Kizyac.onMusicState(\(jsonStr));"
            self?.webView?.evaluateJavaScript(js, completionHandler: nil)
        }
    }
}

