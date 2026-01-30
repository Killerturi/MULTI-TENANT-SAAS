import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../../api/auth.api";
import Lottie from "lottie-react";
import RegisterAnimationData from "../../assets/register.json";

export default function Signup() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSignup = async () => {
        if (!form.name.trim()) {
            setError("Full name is required");
            return;
        }
        if (!form.email.includes("@")) {
            setError("Enter a valid email");
            return;
        }
        if (form.password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            setError("");
            await registerUser({
                name: form.name,
                email: form.email,
                password: form.password,
                tenantName: `${form.name}'s Workspace`,
            });

            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">

            {/* ================= LEFT : PREMIUM SIGNUP ================= */}
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
                        Create Account
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Get started with your workspace
                    </p>

                    {/* Full Name */}
                    <label className="text-sm font-medium text-gray-700">
                        Full Name
                    </label>
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="
              w-full mt-2 mb-5 px-4 py-3
              rounded-xl border border-gray-200
              bg-gray-50 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-indigo-500/40
              transition
            "
                    />

                    {/* Email */}
                    <label className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
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
                    <div className="relative mt-2 mb-5">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
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

                    {/* Confirm Password */}
                    <label className="text-sm font-medium text-gray-700">
                        Confirm Password
                    </label>
                    <div className="relative mt-2 mb-4">
                        <input
                            type={showConfirm ? "text" : "password"}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
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
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-sm font-medium text-indigo-500
                hover:text-indigo-600
              "
                        >
                            {showConfirm ? "Hide" : "Show"}
                        </button>
                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-sm text-red-500 mb-4">
                            {error}
                        </p>
                    )}

                    {/* CTA */}
                    <button
                        onClick={handleSignup}
                        className="
              w-full py-3 mt-2 rounded-xl
              text-white font-medium
              bg-gradient-to-r from-indigo-600 to-purple-600
              hover:from-indigo-700 hover:to-purple-700
              shadow-lg shadow-indigo-500/30
              transition-all duration-300
            "
                    >
                        Create Account →
                    </button>

                    {/* Footer */}
                    <p className="text-sm text-gray-500 mt-6 text-center">
                        Already have an account?{" "}
                        <span
                            onClick={() => navigate("/login")}
                            className="text-indigo-600 font-medium cursor-pointer hover:underline"
                        >
                            Login
                        </span>
                    </p>
                </motion.div>
            </div>

            {/* ================= RIGHT : BRAND PANEL ================= */}
            <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

                <motion.div
                    className="absolute top-20 w-40 h-40 rounded-full bg-white/30 blur-2xl"
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="text-white text-center px-10 max-w-sm">
                    <Lottie animationData={RegisterAnimationData} loop />

                    <h3 className="text-2xl font-semibold mb-3">
                        Build your workspace
                    </h3>
                    <p className="opacity-90 leading-relaxed">
                        Manage projects, users, analytics, and permissions from one powerful dashboard.
                    </p>
                </div>

            </div>
        </div>
    );
}
