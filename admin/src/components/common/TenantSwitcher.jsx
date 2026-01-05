import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTenant } from "../../context/TenantContext";

export default function TenantSwitcher() {
    const { tenant, tenants, setTenant } = useTenant();
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {/* Current Tenant */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border rounded-lg px-3 py-1.5 bg-white dark:bg-zinc-900"
            >
                <span className={`w-2 h-2 rounded-full ${tenant.color}`} />
                <span className="text-sm font-medium">{tenant.name}</span>
                <span className="text-xs">▾</span>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 z-50 mt-2 w-44 rounded-xl border bg-white dark:bg-zinc-900 shadow-lg"
                    >
                        {tenants.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => {
                                    setTenant(t);
                                    setOpen(false);
                                }}
                                className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-zinc-800"
                            >
                                <span className={`w-2 h-2 rounded-full ${t.color}`} />
                                {t.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
