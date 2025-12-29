import { motion } from "framer-motion";

export default function Loader({ label = "Loading analytics…" }) {
    const bars = [0, 1, 2, 3, 4];

    return (
        <div
            className="
        fixed inset-0 z-50
        flex flex-col items-center justify-center
        backdrop-blur-md
        bg-indigo-100/40 dark:bg-gray-900/50
      "
        >
            {/* WAVE BARS */}
            <div className="flex items-end gap-3">
                {bars.map((i) => (
                    <motion.div
                        key={i}
                        className="
              w-5
              rounded-full
              bg-indigo-500
              shadow-md
            "
                        style={{ height: 32 }}   // ✅ base height (IMPORTANT)
                        animate={{
                            height: [32, 64, 32],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.15,
                        }}
                    />
                ))}
            </div>

            {/* BREATHING TEXT */}
            <motion.p
                className="mt-6 text-sm font-medium text-gray-700 dark:text-gray-200 tracking-wide"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {label}
            </motion.p>
        </div>
    );
}
