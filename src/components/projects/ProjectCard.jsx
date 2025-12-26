import { Link } from "react-router-dom";

export default function ProjectCard({ project, onArchive }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
            <div className="flex justify-between mb-2">
                <h2 className="text-xl font-semibold dark:text-white">
                    {project.name}
                </h2>
                <span className="text-sm text-gray-500">{project.owner}</span>
            </div>

            {/* Progress */}
            <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                    <div
                        className="h-2 bg-indigo-500 rounded-full"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            {/* Members */}
            <div className="flex -space-x-2 mb-4">
                {project.members.map(m => (
                    <div
                        key={m}
                        className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm"
                    >
                        {m[0]}
                    </div>
                ))}
            </div>

            {/* Actions */}
            <div className="flex justify-between">
                <Link
                    to={`/projects/${project.id}`}
                    className="text-indigo-500 hover:underline"
                >
                    View
                </Link>
                <button
                    onClick={onArchive}
                    className="text-gray-400 hover:text-red-500"
                >
                    Archive
                </button>
            </div>
        </div>
    );
}
