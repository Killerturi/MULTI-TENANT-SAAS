import { Palette } from "lucide-react";

export default function AppearanceSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold">Appearance</h2>
            </div>

            <div className="flex gap-4">
                <button className="px-4 py-2 rounded border">Light</button>
                <button className="px-4 py-2 rounded border">Dark</button>
            </div>
        </div>
    );
}
