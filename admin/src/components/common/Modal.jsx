import { motion } from "framer-motion";

export default function Modal({ open, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-600 dark:text-gray-300"
                >
                    ×
                </button>
                {children}
            </motion.div>
        </div>
    );
}
