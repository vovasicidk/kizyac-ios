import UIKit

final class HapticsManager {
    static let shared = HapticsManager()
    
    private let lightGenerator = UIImpactFeedbackGenerator(style: .light)
    private let mediumGenerator = UIImpactFeedbackGenerator(style: .medium)
    private let heavyGenerator = UIImpactFeedbackGenerator(style: .heavy)
    private let notificationGenerator = UINotificationFeedbackGenerator()
    
    private var lastHapticTime: TimeInterval = 0
    private let debounceInterval: TimeInterval = 0.07 // 70ms debounce matching Android
    
    private init() {
        lightGenerator.prepare()
        mediumGenerator.prepare()
        heavyGenerator.prepare()
    }
    
    func trigger(level: Int) {
        let now = ProcessInfo.processInfo.systemUptime
        guard now - lastHapticTime >= debounceInterval else { return }
        lastHapticTime = now
        
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }
            switch level {
            case 0, 1:
                self.lightGenerator.impactOccurred()
            case 2:
                self.mediumGenerator.impactOccurred()
            case 3:
                self.heavyGenerator.impactOccurred()
            default:
                self.lightGenerator.impactOccurred()
            }
        }
    }
    
    func notification(type: UINotificationFeedbackGenerator.FeedbackType) {
        DispatchQueue.main.async { [weak self] in
            self?.notificationGenerator.notificationOccurred(type)
        }
    }
}
