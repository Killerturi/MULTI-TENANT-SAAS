export default function ContextPanel() {
    return (
        <aside className="sticky top-10 h-fit rounded-2xl
                      bg-gradient-to-br from-white to-indigo-50
                      p-6 shadow-lg ring-1 ring-indigo-100">
            <h3 className="font-medium text-slate-800 mb-2">
                Workspace Info
            </h3>

            <div className="mb-4 h-px bg-gradient-to-r from-indigo-200 to-transparent" />

            <div className="space-y-3 text-sm text-slate-600">
                <p><strong>Owner:</strong> You</p>
                <p><strong>Plan:</strong> PRO</p>
                <p><strong>Users:</strong> 4 / 5</p>
                <p><strong>Last updated:</strong> Just now</p>
            </div>
        </aside>
    );
}
