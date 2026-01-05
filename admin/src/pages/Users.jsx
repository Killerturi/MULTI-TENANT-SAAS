import React, { useState } from "react";
import toast from "react-hot-toast";
import RoleDropdown from "../components/RoleDropdown";
import InviteUserModal from "../components/users/InviteUserModal";

/* 🔹 Plan config (frontend only) */
const PLAN = "PRO";
const PLAN_LIMITS = {
  Basic: 3,
  PRO: 5,
  Enterprise: Infinity,
};

export default function Users() {
  const userLimit = PLAN_LIMITS[PLAN];

  /* 🔹 Logged-in role (frontend simulation) */
  const loggedInRole = "OWNER" // OWNER | ADMIN | MEMBER
  const [openRoleId, setOpenRoleId] = useState(null);

  const [users, setUsers] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "OWNER", status: "Active" },
    { id: 2, name: "Anita Verma", email: "anita@gmail.com", role: "ADMIN", status: "Active" },
    { id: 3, name: "Amit Das", email: "amit@gmail.com", role: "MEMBER", status: "Pending" },
  ]);

  const [search, setSearch] = useState("");
  const [showInviteModal, setShowInviteModal] = useState(false);

  const activeUsers = users.filter(u => u.status !== "Disabled").length;

  /* ✅ Invite handler from reusable modal */
  const handleInviteUser = ({ email, role }) => {
    if (activeUsers >= userLimit) {
      toast.error("User limit reached. Upgrade your plan.");
      return;
    }

    setUsers(prev => [
      ...prev,
      {
        id: Date.now(),
        name: email.split("@")[0],
        email,
        role,
        status: "Pending",
      },
    ]);

    toast.success(`Invitation sent to ${email}`);
  };

  /* 🔹 Change role */
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
            onClick={() => setShowInviteModal(true)}
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
        className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Users table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl border dark:border-gray-700 overflow-hidden">
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
                className="border-b dark:border-gray-700 hover:bg-indigo-50/40 dark:hover:bg-gray-700"
              >
                {/* User */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold">
                      {user.name[0].toUpperCase()}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-6 py-4">
                  <RoleDropdown
                    value={user.role}
                    isOpen={openRoleId === user.id}
                    onToggle={() =>
                      setOpenRoleId(openRoleId === user.id ? null : user.id)
                    }
                    onClose={() => setOpenRoleId(null)}
                    disabled={user.role === "OWNER" || loggedInRole !== "OWNER"}
                    onChange={(newRole) => {
                      changeRole(user.id, newRole);
                      setOpenRoleId(null);
                    }}
                  />
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm ${user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {user.status}
                  </span>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  {user.role !== "OWNER" && (
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

      {/* ✅ Reusable Invite Modal */}
      <InviteUserModal
        open={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onInvite={handleInviteUser}
      />
    </div>
  );
}
