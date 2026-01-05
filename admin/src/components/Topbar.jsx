import useTheme from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";
import TenantSwitcher from "../components/common/TenantSwitcher";
import { useAuthContext } from "../context/AuthContext";

export default function Topbar() {
    const { dark, toggle } = useTheme();
    const { user } = useAuthContext();

    return (
        <header className="h-14 bg-white dark:bg-gray-900  dark:border-gray-700 flex items-center justify-between px-6">

            {/* 🔁 Tenant Switcher (Animated) */}
            <TenantSwitcher />

            {/* Right side */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                    {user?.role}
                </span>

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
