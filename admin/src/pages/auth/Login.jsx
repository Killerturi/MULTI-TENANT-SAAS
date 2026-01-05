import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

export default function Login() {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl w-96">
                <h2 className="text-xl font-semibold mb-4">Login</h2>
                <input className="input" placeholder="Email" />
                <input className="input mt-2" placeholder="Password" />
                <button
                    onClick={() => {
                        login();
                        navigate("/");
                    }}
                    className="btn-primary mt-4 w-full"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
