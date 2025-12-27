import Card from "../../ui/Card";

export default function RevenueAnalytics() {
    return (
        <Card title="Revenue Overview">
            <ul className="space-y-3 text-sm">
                <li>💰 Monthly Revenue: <strong>$4,320</strong></li>
                <li>📈 Growth Rate: <strong>+15%</strong></li>
                <li>🔁 Renewals (30 days): <strong>6</strong></li>
            </ul>
        </Card>
    );
}
