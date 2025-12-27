import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

import AnalyticsKPI from "../features/analytics/AnalyticsKPI";
import UsageChart from "../features/analytics/UsageChart";
import ProjectHealthChart from "../features/analytics/ProjectHealthChart";
import DateFilter from "../features/analytics/DateFilter";
import ExportActions from "../features/analytics/ExportActions";
import useAnalyticsData from "../features/analytics/useAnalyticsData";

export default function Analytics() {
    const { user, hasRole } = useAuthContext();
    const [range, setRange] = useState("7d");

    // ✅ Role always comes from AuthContext
    const role = user?.role ?? "MEMBER";

    // ✅ Frontend-only data hook
    const { data, loading } = useAnalyticsData(role, range);

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
