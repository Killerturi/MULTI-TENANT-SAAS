export default function Billing() {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Billing</h1>
            <div className="bg-white p-4 rounded-xl">
                <p>Current Plan: <b>PRO</b></p>
                <div className="mt-2 bg-gray-200 h-2 rounded">
                    <div className="bg-indigo-500 h-2 w-2/3 rounded"></div>
                </div>
            </div>
        </div>
    );
}
