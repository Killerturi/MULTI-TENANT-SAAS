export default function Projects() {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <div className="bg-white rounded-xl shadow-sm">
                <table className="w-full text-sm">
                    <thead className="border-b">
                        <tr>
                            <th className="p-3 text-left">Name</th>
                            <th>Status</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b">
                            <td className="p-3">Website Revamp</td>
                            <td>Active</td>
                            <td>Admin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
