import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("auth_user");
        return stored
            ? JSON.parse(stored)
            : {
                name: "Admin User",
                role: "ADMIN", // OWNER | ADMIN | MEMBER
                tenant: "Acme Corp",
            };
    });

    // 🔐 Login simulation
    const login = (userData) => {
        const data = userData || {
            name: "Admin User",
            role: "ADMIN",
            tenant: "Acme Corp",
        };

        localStorage.setItem("token", "fake-jwt");
        localStorage.setItem("auth_user", JSON.stringify(data));
        setUser(data);
    };

    // 🔓 Logout
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth_user");
        setUser(null);
    };

    // 🛡️ RBAC helper
    const hasRole = (allowedRoles = []) => {
        if (!user) return false;
        return allowedRoles.includes(user.role);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                hasRole,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
