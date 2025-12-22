export default function useAuth() {
    return {
        isAuthenticated: true,
        user: {
            name: "Admin User",
            role: "OWNER",
            tenant: "Acme Corp",
        },
    };
}
