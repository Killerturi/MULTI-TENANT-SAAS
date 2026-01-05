import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import Card from "../../ui/Card";


export default function ProjectHealthChart({ data }) {
    return (
        <Card title="Project Health">
            <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#22c55e" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}
