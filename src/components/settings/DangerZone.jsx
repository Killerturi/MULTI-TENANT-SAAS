import { AlertTriangle } from "lucide-react";

export default function DangerZone() {
    return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4 text-red-600">
                <AlertTriangle />
                <h2 className="text-lg font-semibold">Danger Zone</h2>
            </div>

            <button className="px-4 py-2 bg-red-600 text-white rounded">
                Delete Workspace
            </button>
        </div>
    );
}
