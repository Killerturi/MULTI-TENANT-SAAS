import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { registerUser } from "../../api/auth.api";

export default function Signup() {
    const navigate = useNavigate();

    const [dark, setDark] = useState(false);
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
            setError(
                err.response?.data?.message || "Signup failed"
            );
        }
    };


    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-gray-900 transition-colors">

                {/* ===== LEFT : SIGNUP FORM ===== */}
                <div className="flex items-center justify-center px-10">
                    <div className="w-full max-w-md">

                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-semibold dark:text-white">
                                Create Account 🚀
                            </h2>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Get started with your workspace
                        </p>

                        {/* Full Name */}
                        <label className="text-sm dark:text-gray-300">Full Name</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                            placeholder="John Doe"
                        />

                        {/* Email */}
                        <label className="text-sm dark:text-gray-300">Email</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full mt-1 mb-4 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                            placeholder="john@email.com"
                        />

                        {/* Password */}
                        <label className="text-sm dark:text-gray-300">Password</label>
                        <div className="relative mb-4">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-4 cursor-pointer text-sm text-indigo-500"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <label className="text-sm dark:text-gray-300">Confirm Password</label>
                        <div className="relative mb-3">
                            <input
                                type={showConfirm ? "text" : "password"}
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                className="w-full mt-1 px-4 py-3 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white"
                            />
                            <span
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-4 top-4 cursor-pointer text-sm text-indigo-500"
                            >
                                {showConfirm ? "Hide" : "Show"}
                            </span>
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm mb-3">{error}</p>
                        )}

                        {/* Button */}
                        <button
                            onClick={handleSignup}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg mt-2 transition"
                        >
                            Create Account →
                        </button>

                        {/* Footer */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            Already have an account?{" "}
                            <span
                                onClick={() => navigate("/login")}
                                className="text-indigo-500 cursor-pointer"
                            >
                                Login
                            </span>
                        </p>
                    </div>
                </div>

                {/* ===== RIGHT : VISUAL PANEL ===== */}
                <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">

                    {/* Floating glow */}
                    <motion.div
                        className="absolute top-20 w-32 h-32 rounded-full bg-white/30 blur-xl"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                    />

                    <div className="text-white text-center px-10">
                        <h3 className="text-2xl font-semibold mb-2">
                            Build your workspace
                        </h3>
                        <p className="opacity-90">
                            Manage projects, users, and analytics from one dashboard
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
