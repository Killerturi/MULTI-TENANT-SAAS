import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { loginUser } from "../../api/auth.api";
// import animationData from "../../assets/login-3d.json"; // ← ADD YOUR LOTTIE

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [dark, setDark] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const res = await loginUser(email, password);
            const { token, user, tenant } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("auth_user", JSON.stringify(user));
            localStorage.setItem("auth_tenant", JSON.stringify(tenant));

            navigate("/");
        } catch {
            setError("Invalid credentials");
        }
    };


    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-900 transition-colors">

                {/* ===== LEFT : FORM ===== */}
                <div className="flex items-center justify-center px-10">
                    <div className="w-full max-w-md">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-semibold dark:text-white">
                                Welcome Back 👋
                            </h2>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Please enter your details
                        </p>

                        {/* Email */}
                        <label className="text-sm dark:text-gray-300">Email</label>
                        <input
                            type="email"
                            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        {/* Password */}
                        <label className="text-sm dark:text-gray-300">Password</label>
                        <div className="relative mb-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full mt-1 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 cursor-pointer text-sm text-indigo-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm mb-3">{error}</p>
                        )}

                        {/* Button */}
                        <button
                            onClick={handleLogin}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mt-2 transition"
                        >
                            Login →
                        </button>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            Don’t have an account?{" "}
                            <span className="text-indigo-500 cursor-pointer">
                                Sign up
                            </span>
                        </p>
                    </div>
                </div>

                {/* ===== RIGHT : ANIMATION PANEL ===== */}
                <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

                    {/* Floating Lamp */}
                    <motion.div
                        className="absolute top-16 w-24 h-24 rounded-full bg-white/30 blur-xl"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* 3D / Lottie Placeholder */}
                    <div className="w-[380px]">
                        {/* 
            <Lottie 
              animationData={animationData}
              loop
            /> 
            */}
                        <div className="text-white text-2xl text-center">
                            3D Illustration Here
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
