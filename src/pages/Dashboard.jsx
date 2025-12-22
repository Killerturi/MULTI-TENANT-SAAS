import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StatCard from "../ui/StatCard";

export default function Dashboard() {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            setStats([
                { title: "Users", value: "24" },
                { title: "Projects", value: "12" },
                { title: "Usage", value: "70%" },
                { title: "Plan", value: "PRO" },
            ]);
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
        >
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Overview of your workspace
                </p>
            </div>

            {/* Stats */}
            {stats.length === 0 && !loading ? (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400 dark:text-gray-500">
                    <img
                        src="/empty-state.svg"
                        alt="No data"
                        className="w-40 h-40 mb-4"
                    />
                    <p>No stats available</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            title={stat.title}
                            value={stat.value}
                            loading={loading}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
}
