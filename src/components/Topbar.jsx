import useAuth from "../hooks/useAuth";

export default function Topbar() {
    const { user } = useAuth();

    return (
        <header className="flex items-center justify-between bg-white border-b px-6 py-3">
            <span className="text-sm text-gray-500">
                Tenant: <b>{user.tenant}</b>
            </span>
            <div className="flex items-center gap-3">
                <span className="text-sm">{user.name}</span>
                <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                    {user.name[0]}
                </div>
            </div>
        </header>
    );
}
