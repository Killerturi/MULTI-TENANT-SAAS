import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { loginUser } from "../../api/auth.api";
import animationData from "../../assets/login-3d.json";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
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
            setError("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">

            {/* ================= LEFT : PREMIUM FORM ================= */}
            <div className="flex items-center justify-center px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="
            w-full max-w-md
            bg-white/80 backdrop-blur-xl
            rounded-2xl shadow-2xl
            p-8 border border-gray-100
          "
                >
                    {/* Header */}
                    <h2 className="text-3xl font-semibold text-gray-900 mb-1">
                        Welcome Back
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Please enter your details to sign in
                    </p>

                    {/* Email */}
                    <label className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="
              w-full mt-2 mb-5 px-4 py-3
              rounded-xl border border-gray-200
              bg-gray-50 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
              transition
            "
                    />

                    {/* Password */}
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="relative mt-2 mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="
                w-full px-4 py-3 rounded-xl
                border border-gray-200
                bg-gray-50 text-gray-900
                focus:outline-none focus:ring-2 focus:ring-indigo-500/40
                transition
              "
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-sm font-medium text-indigo-500
                hover:text-indigo-600
              "
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500 mb-4">
                            {error}
                        </p>
                    )}

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="
              w-full py-3 mt-2 rounded-xl
              text-white font-medium
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700
              shadow-lg shadow-indigo-500/30
              transition-all duration-300
            "
                    >
                        Login →
                    </button>

                    {/* Footer */}
                    <p className="text-sm text-gray-500 mt-6 text-center">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate("/signup")}
                            className="text-indigo-600 font-medium cursor-pointer hover:underline">
                            Sign up
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* ================= RIGHT : ANIMATION ================= */}
            <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

                {/* Floating glow */}
                <motion.div
                    className="absolute top-20 w-32 h-32 rounded-full bg-white/30 blur-2xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Lottie */}
                <div className="w-[380px]">
                    <Lottie animationData={animationData} loop />
                </div>
            </div>

        </div>
    );
}
