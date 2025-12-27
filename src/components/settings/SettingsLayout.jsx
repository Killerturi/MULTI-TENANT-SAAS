import GeneralSection from "./GeneralSection";
import SecuritySection from "./SecuritySection";
import BillingSection from "./BillingSection";
import DangerSection from "./DangerSection";
import ContextPanel from "./ContextPanel";

export default function SettingsLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-50/40 p-8">
            <h1 className="mb-10 text-2xl font-semibold text-slate-800">
                Settings
            </h1>

            <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_340px]">
                <div className="space-y-14">
                    <GeneralSection />
                    <SecuritySection />
                    <BillingSection />
                    <DangerSection />
                </div>

                <ContextPanel />
            </div>
        </div>
    );
}
