import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";


const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [tenant, setTenant] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔁 Restore auth on refresh
    useEffect(() => {
        const storedUser = localStorage.getItem("auth_user");
        const storedTenant = localStorage.getItem("auth_tenant");

        if (storedUser && storedTenant) {
            setUser(JSON.parse(storedUser));
            setTenant(JSON.parse(storedTenant));
        }
        setLoading(false);
    }, []);

    // 🔐 LOGIN (REAL API)
    const login = async (email, password) => {
        const res = await api.post("/auth/login", {
            email,
            password,
        });

        const { token, user, tenant } = res.data;

        localStorage.setItem("token", token);
        localStorage.setItem("auth_user", JSON.stringify(user));
        localStorage.setItem("auth_tenant", JSON.stringify(tenant));

        setUser(user);
        setTenant(tenant);
    };

    // 🔓 LOGOUT
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("auth_user");
        localStorage.removeItem("auth_tenant");
        setUser(null);
        setTenant(null);
    };

    // 🛡️ RBAC
    const hasRole = (roles = []) => {
        if (!user) return false;
        return roles.includes(user.role);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                tenant,
                login,
                logout,
                hasRole,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
