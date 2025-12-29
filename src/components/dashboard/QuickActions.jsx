import { Plus, UserPlus, CreditCard, Rocket } from "lucide-react";

const actions = [
    { key: "new-project", label: "New Project", icon: Plus },
    { key: "invite-user", label: "Invite User", icon: UserPlus },
    { key: "billing", label: "Billing", icon: CreditCard },
    { key: "upgrade", label: "Upgrade", icon: Rocket },
];

export default function QuickActions({ onAction }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {actions.map(({ key, label, icon: Icon }) => (
                <button
                    key={key}
                    onClick={() => onAction(key)}
                    className="rounded-xl border bg-white dark:bg-zinc-900 p-4 hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
                >
                    <Icon className="w-5 h-5 text-indigo-500 mb-2" />
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {label}
                    </p>
                </button>
            ))}
        </div>
    );
}
