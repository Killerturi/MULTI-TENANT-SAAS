import { useNavigate } from "react-router-dom";
import AssignMembers from "../components/projects/AssignMembers";

export default function ProjectDetails() {
    const navigate = useNavigate();

    return (
        <div className="p-6 dark:text-white">

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-indigo-500 hover:underline cursor-pointer"
            >
                ← Back to Projects
            </button>

            <h1 className="text-3xl font-bold mb-4">Website Revamp</h1>

            <p className="text-gray-500 mb-6">
                Detailed view of project tasks, members, and progress.
            </p>

            <AssignMembers />
        </div>
    );
}
