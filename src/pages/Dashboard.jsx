import StatCard from "../ui/StatCard";

export default function Dashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Users" value="24" />
                <StatCard title="Projects" value="12" />
                <StatCard title="Usage" value="68%" />
                <StatCard title="Plan" value="PRO" />
            </div>
        </div>
    );
}
