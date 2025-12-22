import { NavLink } from "react-router-dom";
import {
    Home,
    Folder,
    Users,
    BarChart2,
    CreditCard,
    Settings,
} from "lucide-react";

const menu = [
    { name: "Dashboard", path: "/", icon: <Home size={18} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={18} /> },
    { name: "Users", path: "/users", icon: <Users size={18} /> },
    { name: "Analytics", path: "/analytics", icon: <BarChart2 size={18} /> },
    { name: "Billing", path: "/billing", icon: <CreditCard size={18} /> },
    { name: "Settings", path: "/settings", icon: <Settings size={18} /> },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 px-4 py-6">
            <div className="text-lg font-semibold tracking-tight mb-8 text-gray-900 dark:text-gray-100">
                ⚡ SaaS Panel
            </div>

            <nav className="space-y-1">
                {menu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition
              ${isActive
                                ? "bg-indigo-50 dark:bg-indigo-700 text-indigo-600 dark:text-white"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`
                        }
                    >
                        <span className="mr-2">{item.icon}</span>
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
