export default function Card({ title, children }) {
    return (
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-6 shadow-sm">
            {title && (
                <h3 className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {title}
                </h3>
            )}
            {children}
        </div>
    );
}
