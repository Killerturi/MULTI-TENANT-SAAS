import { motion } from "framer-motion";
import { useState } from "react";

export default function CreateProjectModal({ onClose, onCreate }) {
    const [name, setName] = useState("");

    const handleCreate = () => {
        if (!name.trim()) return;

        onCreate({
            id: Date.now(),
            name,
            status: "Active",
            progress: 0,
            owner: "Owner",
            members: [],
            archived: false,
        });

        setName("");
        onClose();
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-[420px] rounded-2xl bg-white dark:bg-gray-900 shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
                    <h2 className="text-xl font-semibold text-white">
                        Create New Project
                    </h2>
                    <p className="text-sm text-white/80">
                        Start organizing your work
                    </p>
                </div>

                {/* Body */}
                <div className="px-6 py-5 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Project name
                        </label>
                        <input
                            type="text"
                            placeholder="e.g. Website Revamp"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCreate}
                        className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow hover:scale-105 transition"
                    >
                        Create Project
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
