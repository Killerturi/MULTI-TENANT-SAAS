import { CreditCard } from "lucide-react";

export default function BillingSettings() {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold">Billing</h2>
            </div>

            <p className="text-sm text-gray-600 mb-4">
                Current Plan: <strong>PRO</strong>
            </p>

            <button className="btn-primary">Upgrade Plan</button>
        </div>
    );
}
