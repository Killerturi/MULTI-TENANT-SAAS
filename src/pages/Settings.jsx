import WorkspaceSettings from "../components/settings/WorkspaceSettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import NotificationSettings from "../components/settings/NotificationSettings";
import AppearanceSettings from "../components/settings/AppearanceSettings";
import BillingSettings from "../components/settings/BillingSettings";
import DangerZone from "../components/settings/DangerZone";
import "../styles/settings.css";

export default function Settings() {
    return (
        <div className="settings-page p-8 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-semibold mb-8">Settings</h1>

            <div className="space-y-8 max-w-4xl">
                <WorkspaceSettings />
                <SecuritySettings />
                <NotificationSettings />
                <AppearanceSettings />
                <BillingSettings />
                <DangerZone />
            </div>
        </div>
    );
}
