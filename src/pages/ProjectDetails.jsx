import AssignMembers from "../components/projects/AssignMembers";

export default function ProjectDetails() {
    return (
        <div className="p-6 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Website Revamp</h1>

            <p className="text-gray-500 mb-6">
                Detailed view of project tasks, members, and progress.
            </p>

            <AssignMembers />
        </div>
    );
}
