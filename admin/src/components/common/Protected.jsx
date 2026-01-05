import { useAuthContext } from "../../context/AuthContext";

export default function Protected({ allow, children }) {
    const { user, hasRole } = useAuthContext();

    if (!user || !hasRole(allow)) {
        return null; // or <AccessDenied />
    }

    return children;
}
