export default function UpgradeBanner() {
    return (
        <div className="rounded-2xl bg-indigo-600 p-6 text-white flex items-center justify-between">
            <div>
                <h3 className="text-lg font-semibold">Upgrade your plan</h3>
                <p className="text-sm opacity-90">
                    Unlock more features and higher limits
                </p>
            </div>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg text-sm font-medium">
                Upgrade
            </button>
        </div>
    );
}
