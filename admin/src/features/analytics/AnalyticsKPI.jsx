import StatCard from "../../ui/StatCard";

export default function AnalyticsKPI({ data, loading }) {
    if (!data) return null;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(data.kpi).map(([key, value]) => (
                <StatCard
                    key={key}
                    title={key}
                    value={value}
                    loading={loading}
                />
            ))}
        </div>
    );
}
