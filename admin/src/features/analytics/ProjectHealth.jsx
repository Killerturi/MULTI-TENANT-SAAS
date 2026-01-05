import Card from "../../ui/Card";

export default function ProjectHealth() {
    return (
        <Card title="Project Health">
            <ul className="space-y-3 text-sm">
                <li>🟢 On Track: <strong>82</strong></li>
                <li>🟡 At Risk: <strong>31</strong></li>
                <li>🔴 Delayed: <strong>15</strong></li>
            </ul>
        </Card>
    );
}
