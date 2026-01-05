import { useState } from "react";
import UpgradePlanModal from "../common/UpgradePlanModal";
import { useAuthContext } from "../../context/AuthContext";
import PlanCard from "../Billing/PlanCard";
import { availablePlans } from "../data/availablePlans";



export default function BillingSection() {

    const { user, hasRole } = useAuthContext();

    const [usage, setUsage] = useState(65);
    const [showModal, setShowModal] = useState(false);
    const [plan, setPlan] = useState("PRO");

    if (!hasRole(["OWNER"])) return null;


    return (
        <>
            <section>
                <h2 className="text-xs uppercase tracking-widest text-indigo-500 mb-4">
                    Billing
                </h2>

                <PlanCard
                    plan={plan}
                    usage={usage}
                    onUpgrade={() => setShowModal(true)}
                />
            </section>

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
        </>
    );
}
