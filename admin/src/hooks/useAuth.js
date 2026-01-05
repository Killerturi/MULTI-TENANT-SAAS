import { useAuthContext } from "../context/AuthContext";

export default function useAuth() {
    const { user } = useAuthContext();
    return {
        isAuthenticated: !!localStorage.getItem("token"),
        user,
    };
}
