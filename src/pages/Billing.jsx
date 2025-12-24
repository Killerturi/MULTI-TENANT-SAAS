import React, { useState } from "react";
import PlanCard from "../components/Billing/PlanCard";
import PaymentMethod from "../components/Billing/PaymentMethod";
import InvoiceTable from "../components/Billing/InvoiceTable";

const availablePlans = [
    { name: "Basic", price: "$19/month", features: ["5 Projects", "5 Users"] },
    { name: "PRO", price: "$49/month", features: ["50 Projects", "20 Users"] },
    { name: "Enterprise", price: "$99/month", features: ["Unlimited Projects", "Unlimited Users"] },
];

const sampleInvoices = [
    { id: 1, date: "2025-12-01", amount: "$120.00", status: "Paid" },
    { id: 2, date: "2025-12-05", amount: "$85.50", status: "Unpaid" },
    { id: 3, date: "2025-12-10", amount: "$45.00", status: "Paid" },
    { id: 4, date: "2025-12-15", amount: "$200.00", status: "Unpaid" },
    { id: 5, date: "2025-12-20", amount: "$150.00", status: "Paid" },
];

const sampleMethods = [
    { id: 1, type: "Visa", last4: "1234", isDefault: true },
    { id: 2, type: "MasterCard", last4: "5678", isDefault: false },
    { id: 3, type: "PayPal", last4: "0000", isDefault: false },
];

export default function Billing() {
    const [currentPlan, setCurrentPlan] = useState("PRO");
    const [usage, setUsage] = useState(65);
    const [showModal, setShowModal] = useState(false);
    const [methods, setMethods] = useState(sampleMethods);

    const handleUpgrade = (planName) => {
        setCurrentPlan(planName);
        setShowModal(false);
    };

    const handleAddMethod = () => {
        const newMethod = {
            id: methods.length + 1,
            type: "Amex",
            last4: Math.floor(1000 + Math.random() * 9000).toString(),
            isDefault: false,
        };
        setMethods([...methods, newMethod]);
    };

    return (
        <div className="p-6 space-y-6">
            <PlanCard
                plan={currentPlan}
                usage={usage}
                onUpgrade={() => setShowModal(true)}
            />

            <PaymentMethod methods={methods} onAdd={handleAddMethod} />
            <InvoiceTable invoices={sampleInvoices} />

            {showModal && (
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
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-gray-600 text-lg mb-4">{plan.price}</p>
                                    <ul className="mb-6 text-gray-700 space-y-1 text-sm">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-center">
                                                <span className="mr-2 text-indigo-500">✔</span> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    {plan.name !== currentPlan && (
                                        <button
                                            onClick={() => handleUpgrade(plan.name)}
                                            className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition"
                                        >
                                            Select Plan
                                        </button>
                                    )}
                                    {plan.name === currentPlan && (
                                        <span className="inline-block py-2 px-4 bg-green-100 text-green-700 font-medium rounded-full text-center w-full">
                                            Current Plan
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-2xl font-bold"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
