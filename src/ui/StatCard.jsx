import { motion, animate } from "framer-motion";
import { Users, Folder, BarChart3, Crown } from "lucide-react";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const icons = {
    Users: Users,
    Projects: Folder,
    Usage: BarChart3,
    Plan: Crown,
};

function parseValue(value) {
    // Match number + optional suffix (%, +, etc.)
    const match = String(value).match(/^(\d+)(.*)$/);

    if (!match) {
        return { isNumber: false };
    }

    return {
        isNumber: true,
        number: Number(match[1]),
        suffix: match[2] || "",
    };
}

export default function StatCard({ title, value, loading }) {
    const Icon = icons[title];
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        if (loading) return;

        const parsed = parseValue(value);

        // ❌ If not a number (e.g. "PRO"), show directly
        if (!parsed.isNumber) {
            setDisplayValue(value);
            return;
        }

        // ✅ Animate number values
        const controls = animate(0, parsed.number, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate(latest) {
                setDisplayValue(
                    `${Math.floor(latest)}${parsed.suffix}`
                );
            },
        });

        return () => controls.stop();
    }, [value, loading]);

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-2xl border bg-white dark:bg-zinc-900 p-5 shadow-sm"
        >
            {loading ? (
                <Skeleton />
            ) : (
                <>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {title}
                        </p>
                        {Icon && <Icon className="w-5 h-5 text-indigo-500" />}
                    </div>

                    <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                        {displayValue}
                    </h2>
                </>
            )}
        </motion.div>
    );
}
