export default function ProjectSummary() {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Project Summary</h3>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Status:</strong> Active</p>
                <p><strong>Progress:</strong> 70%</p>
                <p><strong>Owner:</strong> Admin</p>
            </div>
        </div>
    );
}
