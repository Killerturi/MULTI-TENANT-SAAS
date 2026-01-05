import React, { useState } from "react";
import PlanCard from "../components/Billing/PlanCard";
import PaymentMethod from "../components/Billing/PaymentMethod";
import InvoiceTable from "../components/Billing/InvoiceTable";
import UpgradePlanModal from "../components/common/UpgradePlanModal";
import { sampleMethods } from "../components/data/sampleMethods";
import { availablePlans } from "../components/data/availablePlans";
import { sampleInvoices } from "../components/data/sampleInvoices";







export default function Billing() {
    const [plan, setPlan] = useState("PRO");
    const [usage, setUsage] = useState(65);
    const [showModal, setShowModal] = useState(false);
    const [methods, setMethods] = useState(sampleMethods);

    const handleUpgrade = (planName) => {
        setPlan(planName);
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
                plan={plan}
                usage={usage}
                onUpgrade={() => setShowModal(true)}
            />

            <PaymentMethod methods={methods} onAdd={handleAddMethod} />
            <InvoiceTable invoices={sampleInvoices} />

            <UpgradePlanModal
                open={showModal}
                onClose={() => setShowModal(false)}
                availablePlans={availablePlans}
                currentPlan={plan}
                onUpgrade={(newPlan) => {
                    setPlan(newPlan);
                    setShowModal(false);
                }}
            />
        </div>
    );
}
