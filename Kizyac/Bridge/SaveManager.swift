import UIKit
import UniformTypeIdentifiers

final class SaveManager: NSObject, UIDocumentPickerDelegate {
    static let shared = SaveManager()
    
    private let saveFilename = "kizyac_save.kzsave"
    private var importCompletion: ((String) -> Void)?
    
    private var saveFileURL: URL {
        let docs = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)[0]
        return docs.appendingPathComponent(saveFilename)
    }
    
    private override init() {
        super.init()
    }
    
    func save(data: String) -> Bool {
        UserDefaults.standard.set(data, forKey: "kizyac_backup_state")
        do {
            try data.write(to: saveFileURL, atomically: true, encoding: .utf8)
            return true
        } catch {
            print("Save error: \(error)")
            return false
        }
    }
    
    func load() -> String {
        if FileManager.default.fileExists(atPath: saveFileURL.path),
           let content = try? String(contentsOf: saveFileURL, encoding: .utf8),
           !content.isEmpty {
            return content
        }
        return UserDefaults.standard.string(forKey: "kizyac_backup_state") ?? ""
    }
    
    func exportSave(data: String, from presenter: UIViewController) {
        let tempURL = FileManager.default.temporaryDirectory.appendingPathComponent(saveFilename)
        do {
            try data.write(to: tempURL, atomically: true, encoding: .utf8)
            let activityVC = UIActivityViewController(activityItems: [tempURL], applicationActivities: nil)
            if let popover = activityVC.popoverPresentationController {
                popover.sourceView = presenter.view
                popover.sourceRect = CGRect(x: presenter.view.bounds.midX, y: presenter.view.bounds.midY, width: 0, height: 0)
                popover.permittedArrowDirections = []
            }
            presenter.present(activityVC, animated: true)
        } catch {
            print("Export error: \(error)")
        }
    }
    
    func importSave(from presenter: UIViewController, completion: @escaping (String) -> Void) {
        self.importCompletion = completion
        
        let types: [UTType] = [.data, .text, .json]
        let picker = UIDocumentPickerViewController(forOpeningContentTypes: types, asCopy: true)
        picker.delegate = self
        picker.allowsMultipleSelection = false
        presenter.present(picker, animated: true)
    }
    
    func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
        guard let url = urls.first else { return }
        if let content = try? String(contentsOf: url, encoding: .utf8) {
            importCompletion?(content)
        }
        importCompletion = nil
    }
    
    func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController) {
        importCompletion = nil
    }
}
