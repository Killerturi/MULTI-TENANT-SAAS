import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import ConfirmModal from "../common/ConfirmModal";
import toast from "react-hot-toast";

export default function DangerSection() {
    const { hasRole } = useAuthContext();
    const [open, setOpen] = useState(false);

    if (!hasRole(["OWNER"])) return null;

    return (
        <>
            <section className="rounded-2xl bg-red-50 dark:bg-red-900/20 p-6">
                <h3 className="font-medium text-red-600 mb-3">Danger Zone</h3>

                <button
                    onClick={() => setOpen(true)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Delete Workspace
                </button>
            </section>

            <ConfirmModal
                open={open}
                onClose={() => setOpen(false)}
                onConfirm={async () => {
                    try {
                        toast.loading("Deleting workspace...", {
                            id: "delete-workspace",
                        });

                        // 🔴 API call goes here
                        // await deleteWorkspaceApi();

                        toast.success("Workspace deleted successfully", {
                            id: "delete-workspace",
                        });

                        setOpen(false);

                    } catch (err) {
                        toast.error("Failed to delete workspace", {
                            id: "delete-workspace",
                        });
                    }
                }}
                title="Delete Workspace?"
                description="This action is permanent and cannot be undone."
            />
        </>
    );
}
