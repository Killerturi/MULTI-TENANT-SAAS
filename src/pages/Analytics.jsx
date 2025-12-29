import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";

import AnalyticsKPI from "../features/analytics/AnalyticsKPI";
import UsageChart from "../features/analytics/UsageChart";
import ProjectHealthChart from "../features/analytics/ProjectHealthChart";
import DateFilter from "../features/analytics/DateFilter";
import ExportActions from "../features/analytics/ExportActions";
import useAnalyticsData from "../features/analytics/useAnalyticsData";
import Loader from "../ui/Loader";

export default function Analytics() {
    const { user, hasRole } = useAuthContext();
    const [range, setRange] = useState("7d");
    const [loader, setLoader] = useState(true);
    const [loadTime, setLoadTime] = useState(null);



    // ✅ Role always comes from AuthContext
    const role = user?.role ?? "MEMBER";

    // ✅ Frontend-only data hook
    const { data, loading } = useAnalyticsData(role, range);

    useEffect(() => {
        const start = performance.now(); // ⏱️ start time

        // 🔹 Simulate API / chart load
        const timer = setTimeout(() => {
            const end = performance.now(); // ⏱️ end time
            setLoadTime(Math.round(end - start));
            setLoader(false);
        }, 1200); // simulate 1.2s chart load

        return () => clearTimeout(timer);
    }, []);

    if (loader) {
        return <Loader fullscreen label="Loading analytics…" />;
    }

    return (
        <div className="space-y-8">
            {/* ===== Header ===== */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Analytics</h1>
                <DateFilter value={range} onChange={setRange} />
            </div>

            {/* ===== KPI Section ===== */}
            <AnalyticsKPI data={data} loading={loading} />

            {/* ===== Charts + Actions ===== */}
            <div className="space-y-6">
                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <UsageChart data={data?.usage} loading={loading} />
                    <ProjectHealthChart data={data?.projects} loading={loading} />
                </div>

                {/* Export (RBAC controlled) */}
                {hasRole(["OWNER", "ADMIN"]) && (
                    <div className="flex justify-end">
                        <ExportActions data={data} disabled={loading || !data} />
                    </div>
                )}
            </div>
        </div>
    );
}
