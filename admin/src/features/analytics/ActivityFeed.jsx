import Card from "../../ui/Card";

export default function ActivityFeed() {
    return (
        <Card title="Recent Activity">
            <ul className="space-y-4 text-sm">
                <li>🆕 Project <strong>Website Revamp</strong> created</li>
                <li>👤 Anita Verma added as Admin</li>
                <li>💼 Workspace upgraded to PRO plan</li>
            </ul>
        </Card>
    );
}
