import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", usage: 30 },
    { month: "Feb", usage: 45 },
    { month: "Mar", usage: 55 },
    { month: "Apr", usage: 70 },
];

export default function UsageChart() {
    return (
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-5">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                Usage Overview
            </h3>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="#6366f1"
                        strokeWidth={3}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
