import { useNavigate } from "react-router-dom";

export default function ProjectCard({ project, onArchive }) {
    const navigate = useNavigate();

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex justify-between mb-3">
                <h2 className="text-xl font-semibold dark:text-white">
                    {project.name}
                </h2>
                <span className="text-sm text-gray-500">{project.owner}</span>
            </div>

            <div className="mb-4">
                <div className="text-sm text-gray-500 mb-1">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="text-indigo-500 hover:underline"
                >
                    View
                </button>

                <button
                    onClick={onArchive}
                    className="text-gray-400 hover:text-red-500"
                >
                    {project.archived ? "Restore" : "Archive"}
                </button>
            </div>
        </div>
    );
}
