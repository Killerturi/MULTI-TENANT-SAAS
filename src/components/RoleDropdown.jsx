import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Crown, Shield, User } from "lucide-react";
import { useEffect, useRef } from "react";

const roles = [
    {
        name: "Owner",
        icon: Crown,
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
        locked: true,
    },
    {
        name: "Admin",
        icon: Shield,
        color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    },
    {
        name: "Member",
        icon: User,
        color: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
    },
];

export default function RoleDropdown({
    value,
    onChange,
    disabled,
    isOpen,
    onToggle,
    onClose,
}) {
    const ref = useRef(null);
    const current = roles.find(r => r.name === value);

    /* ✅ Close on outside click */
    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div ref={ref} className="relative inline-block">
            {/* Trigger */}
            <button
                onClick={() => !disabled && onToggle()}
                className={`
          flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium
          border transition
          ${current.color}
          ${disabled ? "opacity-70 cursor-not-allowed" : "hover:shadow"}
        `}
            >
                <current.icon size={14} />
                {current.name}
                {!disabled && <ChevronDown size={14} />}
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        className="absolute z-50 mt-2 w-44 rounded-xl bg-white dark:bg-gray-900 shadow-xl border dark:border-gray-700"
                    >
                        {roles.map(role => {
                            const Icon = role.icon;

                            return (
                                <button
                                    key={role.name}
                                    disabled={role.locked}
                                    onClick={() => {
                                        if (!role.locked) onChange(role.name);
                                    }}
                                    className={`
                    w-full flex items-center gap-2 px-4 py-2 text-sm
                    ${role.color}
                    ${role.locked
                                            ? "opacity-60 cursor-not-allowed"
                                            : "hover:bg-black/5 dark:hover:bg-white/5"}
                  `}
                                >
                                    <Icon size={14} />
                                    {role.name}
                                    {role.locked && (
                                        <span className="ml-auto text-xs opacity-70">Locked</span>
                                    )}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
