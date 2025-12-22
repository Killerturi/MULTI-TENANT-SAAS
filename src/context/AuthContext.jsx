import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: "Admin User",
        role: "OWNER",
        tenant: "Acme Corp",
    });

    const login = () => {
        localStorage.setItem("token", "fake-jwt");
    };

    const logout = () => {
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
