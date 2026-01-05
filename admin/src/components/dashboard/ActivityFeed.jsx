const activities = [
    "John invited a new user",
    "Project CRM created",
    "Usage crossed 70%",
    "Plan upgraded to PRO",
];

export default function ActivityFeed() {
    return (
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-5">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
                Recent Activity
            </h3>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-200">
                {activities.map((item, i) => (
                    <li key={i} className="border-b pb-2 last:border-none">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
