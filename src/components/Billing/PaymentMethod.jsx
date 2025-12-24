import React from "react";

export default function PaymentMethod({ methods, onAdd }) {
    return (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Payment Methods</h2>
            {methods.map((method) => (
                <div
                    key={method.id}
                    className="flex justify-between items-center mb-2 p-3 border-l-4 border-indigo-400 bg-white rounded shadow-sm hover:shadow-md transition"
                >
                    <div className="text-gray-800 font-medium">
                        {method.type} **** {method.last4}{" "}
                        {method.isDefault && (
                            <span className="text-green-500 font-semibold">(Default)</span>
                        )}
                    </div>
                    <button className="text-indigo-500 font-medium hover:underline">Edit</button>
                </div>
            ))}
            <button
                onClick={onAdd}
                className="mt-3 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
                Add Payment Method
            </button>
        </div>
    );
}
