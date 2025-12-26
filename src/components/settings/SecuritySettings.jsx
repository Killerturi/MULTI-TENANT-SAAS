import { Shield } from "lucide-react";

export default function SecuritySettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold">Security</h2>
            </div>

            <div className="space-y-4">
                <label className="flex justify-between items-center">
                    <span>Enable Two-Factor Authentication</span>
                    <input type="checkbox" className="toggle" />
                </label>

                <label className="flex justify-between items-center">
                    <span>Email alerts on new login</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                </label>
            </div>
        </div>
    );
}
