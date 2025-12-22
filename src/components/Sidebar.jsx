import { NavLink } from "react-router-dom";

const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Users", path: "/users" },
    { name: "Analytics", path: "/analytics" },
    { name: "Billing", path: "/billing" },
    { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r">
            <div className="p-4 text-xl font-bold">SaaS Panel</div>
            <nav className="px-4 space-y-2">
                {menu.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-lg text-sm ${isActive
                                ? "bg-indigo-100 text-indigo-600"
                                : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
