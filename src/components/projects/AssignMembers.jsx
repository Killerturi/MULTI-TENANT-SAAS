export default function AssignMembers() {
    const members = ["Rahul", "Anita", "Amit"];

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Assign Members</h3>

            {members.map(m => (
                <label key={m} className="flex items-center gap-2 mb-2">
                    <input type="checkbox" />
                    {m}
                </label>
            ))}
        </div>
    );
}
