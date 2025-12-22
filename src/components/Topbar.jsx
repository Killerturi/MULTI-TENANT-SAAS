import useTheme from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export default function Topbar() {
    const { dark, toggle } = useTheme();

    return (
        <header className="h-14 bg-white dark:bg-gray-900 border-b dark:border-gray-700 flex items-center justify-between px-6">
            <select className="border rounded-md px-3 py-1 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                <option>Acme Corp</option>
                <option>Demo Org</option>
            </select>

            <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-300">Admin</span>
                <div
                    onClick={toggle}
                    className="cursor-pointer w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center"
                    title="Toggle theme"
                >
                    {dark ? <Sun size={16} /> : <Moon size={16} />}
                </div>
            </div>
        </header>
    );
}
