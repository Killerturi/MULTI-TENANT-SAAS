import { createContext, useContext, useState } from "react";

const TenantContext = createContext();

const TENANTS = [
    { id: 1, name: "Acme Corp", color: "bg-indigo-500" },
    { id: 2, name: "Beta Org", color: "bg-rose-500" },
    { id: 3, name: "Gamma Ltd", color: "bg-emerald-500" },
];

export function TenantProvider({ children }) {
    const [tenant, setTenant] = useState(TENANTS[0]);

    return (
        <TenantContext.Provider value={{ tenant, tenants: TENANTS, setTenant }}>
            {children}
        </TenantContext.Provider>
    );
}

export function useTenant() {
    return useContext(TenantContext);
}
