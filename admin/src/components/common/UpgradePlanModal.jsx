import React from "react";

export default function UpgradePlanModal({
    open,
    onClose,
    availablePlans,
    currentPlan,
    onUpgrade,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-8 relative overflow-hidden">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Choose a Plan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {availablePlans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`p-6 rounded-xl border transition transform hover:-translate-y-1 hover:shadow-lg ${plan.name === currentPlan
                                    ? "border-indigo-500 bg-indigo-50"
                                    : "border-gray-200 bg-white"
                                }`}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-gray-600 text-lg mb-4">
                                {plan.price}
                            </p>

                            <ul className="mb-6 text-gray-700 space-y-1 text-sm">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center">
                                        <span className="mr-2 text-indigo-500">✔</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {plan.name !== currentPlan ? (
                                <button
                                    onClick={() => onUpgrade(plan.name)}
                                    className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
                                >
                                    Select Plan
                                </button>
                            ) : (
                                <span className="inline-block py-2 px-4 bg-green-100 text-green-700 font-medium rounded-full text-center w-full">
                                    Current Plan
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-2xl font-bold"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
