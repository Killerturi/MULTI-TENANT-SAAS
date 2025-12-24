import { motion } from "framer-motion";
import { useTenant } from "../context/TenantContext";
import Protected from "../components/common/Protected";
import TenantSwitcher from "../components/common/TenantSwitcher";

import StatCard from "../ui/StatCard";
import QuickActions from "../components/dashboard/QuickActions";
import UsageChart from "../components/dashboard/UsageChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import UpgradeBanner from "../components/dashboard/UpgradeBanner";

export default function Dashboard() {
    const { tenant } = useTenant();

    const stats = [
        { title: "Users", value: "24" },
        { title: "Projects", value: "12" },
        { title: "Usage", value: "70%" },
        { title: "Plan", value: "PRO" },
    ];

    return (
        <motion.div
            key={tenant.id} // 🔥 re-animate on tenant switch
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
        >
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Dashboard
                    </h1>
                    <p className="text-sm text-gray-500">
                        {tenant.name} Workspace
                    </p>
                </div>

                <div className="flex items-center gap-4">
                 

                    {/* OWNER / ADMIN ONLY */}
                    <Protected allow={["OWNER", "ADMIN"]}>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
                            + New Project
                        </button>
                    </Protected>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <StatCard key={stat.title} {...stat} />
                ))}
            </div>

            {/* OWNER ONLY */}
            <Protected allow={["OWNER"]}>
                <QuickActions />
            </Protected>

            {/* Everyone */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <UsageChart />
                <ActivityFeed />
            </div>

            {/* Upgrade banner — OWNER ONLY */}
            <Protected allow={["OWNER"]}>
                <UpgradeBanner />
            </Protected>
        </motion.div>
    );
}
