import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function InviteUserModal({ open, onClose, onInvite }) {
    const [inviteEmail, setInviteEmail] = useState("");
    const [inviteRole, setInviteRole] = useState("Member");

    const handleInvite = () => {
        if (!inviteEmail) return;

        onInvite({
            email: inviteEmail,
            role: inviteRole,
        });

        // reset
        setInviteEmail("");
        setInviteRole("Member");
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[420px] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 text-white">
                            <h2 className="text-xl font-semibold">Invite User</h2>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                                value={inviteEmail}
                                onChange={(e) => setInviteEmail(e.target.value)}
                            />

                            <select
                                className="w-full px-4 py-2.5 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-700"
                                value={inviteRole}
                                onChange={(e) => setInviteRole(e.target.value)}
                            >
                                <option value="ADMIN">Admin</option>
                                <option value="MEMBER">Member</option>
                            </select>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 px-6 pb-6">
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleInvite}
                                className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600"
                            >
                                Send Invite
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
