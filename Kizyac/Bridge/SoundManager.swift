import Foundation
import AVFoundation

final class SoundManager {
    static let shared = SoundManager()
    
    private let soundCounts: [String: Int] = [
        "wet": 12,
        "soft": 12,
        "metal": 12,
        "glass": 12,
        "cosmic": 12,
        "upgrade": 6,
        "critical": 6,
        "unlock": 4,
        "ui": 6,
        "reset": 4,
        "transition": 6,
        "subtab": 6,
        "open": 4,
        "close": 4,
        "skin": 5,
        "achievement": 5,
        "import": 4,
        "music": 3,
        "toggle": 3,
        "evolve_wet": 4,
        "evolve_soft": 4,
        "evolve_metal": 4,
        "evolve_glass": 4,
        "evolve_cosmic": 4,
        "dimension": 4,
        "sync": 4,
        "boost": 4,
        "resonance": 4,
        "research": 4,
        "protocol": 4,
        "anomaly": 4,
        "error": 3,
        "equip": 3,
        "overload": 4
    ]
    
    private var lastIndices: [String: Int] = [:]
    private var playerPool: [AVAudioPlayer] = []
    private let maxConcurrentPlayers = 24
    private let serialQueue = DispatchQueue(label: "com.rinat.kizyac.sound")

    private init() {
        configureAudioSession()
    }
    
    private func configureAudioSession() {
        do {
            try AVAudioSession.sharedInstance().setCategory(.ambient, mode: .default, options: [.mixWithOthers])
            try AVAudioSession.sharedInstance().setActive(true)
        } catch {
            print("Audio session configuration error: \(error)")
        }
    }
    
    func playSound(name: String) {
        playEffect(name: name, category: "wet", volume: 0.8)
    }
    
    func playEffect(name: String, category: String?, volume: Double) {
        serialQueue.async { [weak self] in
            guard let self = self else { return }
            
            let isTap = (name == "tap")
            let isEvolve = (name == "evolve")
            
            let group: String
            if isTap {
                group = category ?? "wet"
            } else if isEvolve {
                group = "evolve_\(category ?? "wet")"
            } else {
                group = name
            }
            
            let count = self.soundCounts[group] ?? self.soundCounts["wet"] ?? 12
            var index = Int.random(in: 1...count)
            if let last = self.lastIndices[group], last == index, count > 1 {
                index = (index % count) + 1
            }
            self.lastIndices[group] = index
            
            let filename = "kz_\(group)_\(index)"
            guard let url = Bundle.main.url(forResource: filename, withExtension: "wav", subdirectory: "Sounds")
                    ?? Bundle.main.url(forResource: filename, withExtension: "wav") else {
                return
            }
            
            do {
                let player = try AVAudioPlayer(contentsOf: url)
                player.volume = Float(max(0.0, min(1.0, volume)))
                player.enableRate = true
                if isTap {
                    player.rate = 0.96 + Float.random(in: 0.0...0.08)
                } else {
                    player.rate = 0.99 + Float.random(in: 0.0...0.02)
                }
                player.prepareToPlay()
                
                DispatchQueue.main.async {
                    // Keep reference so it doesn't deallocate during playback
                    self.playerPool.append(player)
                    if self.playerPool.count > self.maxConcurrentPlayers {
                        self.playerPool.removeAll { !$0.isPlaying }
                    }
                    player.play()
                }
            } catch {
                print("Failed to play effect \(filename): \(error)")
            }
        }
    }
}

