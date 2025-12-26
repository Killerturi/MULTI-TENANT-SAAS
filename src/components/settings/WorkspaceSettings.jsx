import { Building2 } from "lucide-react";
import toast from "react-hot-toast";

export default function WorkspaceSettings() {
    const handleSave = () => toast.success("Workspace updated");

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold">Workspace Settings</h2>
            </div>

            <div className="space-y-4">
                <input
                    className="input"
                    placeholder="Workspace Name"
                    defaultValue="Acme Corp"
                />
                <input className="input" placeholder="Timezone" defaultValue="Asia/Kolkata" />
                <input className="input" placeholder="Language" defaultValue="English" />

                <button onClick={handleSave} className="btn-primary">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
