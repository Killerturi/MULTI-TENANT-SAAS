import { useNavigate } from "react-router-dom";
import ProjectSummary from "../components/projects/ProjectSummary";
import AssignMembers from "../components/projects/AssignMembers";
import TaskList from "../components/projects/TaskList";

export default function ProjectDetails() {
    const navigate = useNavigate();

    return (
        <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen dark:text-white">
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-indigo-500 hover:underline"
            >
                ← Back to Projects
            </button>

            <h1 className="text-3xl font-bold mb-2">Website Revamp</h1>
            <p className="text-gray-500 mb-6">
                Manage project progress, members, and tasks
            </p>

            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <TaskList />
                </div>

                <div className="space-y-6">
                    <ProjectSummary />
                    <AssignMembers />
                </div>
            </div>
        </div>
    );
}
