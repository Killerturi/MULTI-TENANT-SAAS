import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import CreateProjectModal from "../components/projects/CreateProjectModal";

export default function Projects() {
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState("");

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: "Website Revamp",
            status: "Active",
            progress: 70,
            owner: "Admin",
            members: ["Rahul", "Anita"],
            archived: false,
        },
        {
            id: 2,
            name: "Android App",
            status: "Active",
            progress: 40,
            owner: "Admin",
            members: ["Rahul", "Anita"],
            archived: false,
        },
    ]);

    const createProject = (project) => {
        setProjects([...projects, project]);
    };

    const toggleArchive = (id) => {
        setProjects(projects.map(p =>
            p.id === id ? { ...p, archived: !p.archived } : p
        ));
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold dark:text-white">Projects</h1>
                <button
                    onClick={() => setShowModal(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
                >
                    + New Project
                </button>
            </div>

            {/* Search */}
            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects
                    .filter(p => !p.archived)
                    .filter(p =>
                        p.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onArchive={() => toggleArchive(project.id)}
                        />
                    ))}
            </div>

            {showModal && (
                <CreateProjectModal
                    onClose={() => setShowModal(false)}
                    onCreate={createProject}
                />
            )}
        </div>
    );
}
