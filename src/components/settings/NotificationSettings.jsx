import { Bell } from "lucide-react";

export default function NotificationSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold">Notifications</h2>
            </div>

            <div className="space-y-3">
                <label className="flex justify-between">
                    <span>Project updates</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                </label>
                <label className="flex justify-between">
                    <span>User joined workspace</span>
                    <input type="checkbox" className="toggle" />
                </label>
                <label className="flex justify-between">
                    <span>Weekly summary email</span>
                    <input type="checkbox" className="toggle" defaultChecked />
                </label>
            </div>
        </div>
    );
}
