import React from "react";

export default function PlanCard({ plan, usage, onUpgrade }) {
    const colors = {
        Basic: "from-green-400 to-green-600",
        PRO: "from-indigo-400 to-indigo-600",
        Enterprise: "from-pink-400 to-pink-600",
    };

    return (
        <div className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${colors[plan]} text-white`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">{plan} Plan</h2>
                <span className="px-3 py-1 bg-white/25 rounded-full text-sm font-medium">
                    Popular
                </span>
            </div>
            <p className="mb-4">Usage: {usage}% of your plan limit</p>
            <div className="w-full bg-white/30 h-4 rounded-full mb-4">
                <div
                    className="h-4 rounded-full bg-white shadow-inner"
                    style={{ width: `${usage}%` }}
                ></div>
            </div>
            <button
                onClick={onUpgrade}
                className="px-5 py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-white/90 transition"
            >
                Upgrade / Change Plan
            </button>
        </div>
    );
}
