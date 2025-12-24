import { motion } from "framer-motion";
import { Users, Folder, BarChart3, Crown } from "lucide-react";
import Skeleton from "./Skeleton";


const icons = {
    Users: Users,
    Projects: Folder,
    Usage: BarChart3,
    Plan: Crown,
};

export default function StatCard({ title, value, loading }) {
    const Icon = icons[title];

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
                        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                        <Icon className="w-5 h-5 text-indigo-500" />
                    </div>
                    <h2 className="mt-3 text-3xl font-semibold text-gray-900 dark:text-white">
                        {value}
                    </h2>
                </>
            )}
        </motion.div>
    );
}
