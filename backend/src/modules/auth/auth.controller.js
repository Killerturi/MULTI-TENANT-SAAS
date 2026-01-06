import User from "../users/user.model.js";
import Tenant from "../tenants/tenant.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        /* 1️⃣ Validate input */
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        /* 2️⃣ Find user */
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        /* 3️⃣ Compare password */
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        /* 4️⃣ Fetch tenant */
        const tenant = await Tenant.findById(user.tenantId);
        if (!tenant) {
            return res.status(404).json({
                message: "Tenant not found"
            });
        }

        /* 5️⃣ Generate JWT */
        const token = jwt.sign(
            {
                userId: user._id,
                tenantId: tenant._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        /* 6️⃣ Respond */
        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            tenant: {
                id: tenant._id,
                name: tenant.name,
                plan: tenant.plan
            }
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
