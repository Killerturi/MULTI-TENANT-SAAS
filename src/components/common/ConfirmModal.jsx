import { motion } from "framer-motion";

export default function ConfirmModal({ open, onClose, onConfirm, title, description }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-6"
            >
                <h2 className="text-lg font-semibold text-red-600 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                    {description}
                </p>

                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg border">
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-lg bg-red-600 text-white"
                    >
                        Confirm
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
