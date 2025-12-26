import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";
import RoleDropdown from "../components/RoleDropdown";

/* 🔹 Plan config (frontend only) */
const PLAN = "PRO";
const PLAN_LIMITS = {
  Basic: 3,
  PRO: 5,
  Enterprise: Infinity,
};

export default function Users() {
  const userLimit = PLAN_LIMITS[PLAN];

  /* 🔹 Assume logged-in user role (frontend simulation) */
  const loggedInRole = "Owner"; // Owner | Admin | Member
  const [openRoleId, setOpenRoleId] = useState(null);


  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Owner", status: "Active" },
    { id: 2, name: "Anita Verma", email: "anita@gmail.com", role: "Admin", status: "Active" },
    { id: 3, name: "Amit Das", email: "amit@gmail.com", role: "Member", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("Member");

  const activeUsers = users.filter(u => u.status !== "Disabled").length;

  /* 🔹 Invite user */
  const inviteUser = () => {
    if (!inviteEmail) return;

    if (activeUsers >= userLimit) {
      toast.error("User limit reached. Upgrade your plan.");
      return;
    }

    setUsers([
      ...users,
      {
        id: Date.now(),
        name: inviteEmail.split("@")[0],
        email: inviteEmail,
        role: inviteRole,
        status: "Pending",
      },
    ]);

    toast.success("Invitation sent successfully");
    setInviteEmail("");
    setInviteRole("Member");
    setShowModal(false);
  };

  /* 🔹 Change role (UI lock applied) */
  const changeRole = (id, role) => {
    setUsers(users.map(u => (u.id === id ? { ...u, role } : u)));
    toast.success("Role updated");
  };

  /* 🔹 Disable user */
  const disableUser = (id) => {
    setUsers(users.map(u => (u.id === id ? { ...u, status: "Disabled" } : u)));
    toast("User disabled", { icon: "⚠️" });
  };

  const filteredUsers = users.filter(
    u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Management
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage users, roles and access
          </p>
        </div>

        {(loggedInRole === "Owner" || loggedInRole === "Admin") && (
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            + Invite User
          </button>
        )}
      </div>

      {/* User limit warning */}
      {activeUsers >= userLimit && (
        <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl">
          User limit reached for <b>{PLAN}</b> plan. Upgrade in Billing.
        </div>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-5 py-3 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border dark:border-gray-700">
        <table className="w-full">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Role</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map(user => (
              <tr
                key={user.id}
                className="relative border-t dark:border-gray-700 hover:bg-indigo-50/40 dark:hover:bg-gray-700"
              >
                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                {/* ROLE DROPDOWN */}
                <td className="px-6 py-4">
                  <RoleDropdown
                    value={user.role}
                    isOpen={openRoleId === user.id}
                    onToggle={() =>
                      setOpenRoleId(openRoleId === user.id ? null : user.id)
                    }
                    onClose={() => setOpenRoleId(null)}
                    disabled={user.role === "Owner" || loggedInRole !== "Owner"}
                    onChange={(newRole) => {
                      changeRole(user.id, newRole);
                      setOpenRoleId(null);
                    }}
                  />
                </td>


                {/* Status */}
                <td className="px-6 py-4">
                  <span className={`px-4 py-1.5 rounded-full text-sm ${user.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}>
                    {user.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  {user.role !== "Owner" && (
                    <button
                      onClick={() => disableUser(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Disable
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 Animated Invite Modal */}
      <AnimatePresence>
        {showModal && (
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-[420px] overflow-hidden"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-5 text-white">
                <h2 className="text-xl font-semibold">Invite User</h2>
              </div>

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
                  <option>Admin</option>
                  <option>Member</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 px-6 pb-6">
                <button onClick={() => setShowModal(false)} className="text-gray-500">
                  Cancel
                </button>
                <button
                  onClick={inviteUser}
                  className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600"
                >
                  Send Invite
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
