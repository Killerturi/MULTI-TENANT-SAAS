import User from "./user.model.js";
import Tenant from "../tenants/tenant.model.js";
import { PLAN_LIMITS } from "../../config/planLimits.js";
import bcrypt from "bcryptjs";

/* =====================================================
   INVITE USER (OWNER / ADMIN)
   ===================================================== */
export const inviteUser = async (req, res) => {
    try {
        const { name, email, role } = req.body;

        /* 1️⃣ Validate role */
        if (!["OWNER", "ADMIN", "MEMBER"].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        /* 2️⃣ Fetch tenant */
        const tenant = await Tenant.findById(req.tenantId);
        if (!tenant) {
            return res.status(404).json({ message: "Tenant not found" });
        }

        /* 3️⃣ Enforce USER LIMIT based on PLAN */
        const limits = PLAN_LIMITS[tenant.plan];

        const userCount = await User.countDocuments({
            tenantId: req.tenantId
        });

        if (userCount >= limits.users) {
            return res.status(403).json({
                message: `User limit reached for ${tenant.plan} plan`
            });
        }

        /* 4️⃣ Check if user already exists in this tenant */
        const existingUser = await User.findOne({
            email,
            tenantId: req.tenantId
        });

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User already exists in this tenant" });
        }

        /* 5️⃣ Generate temporary password */
        const tempPassword = Math.random().toString(36).slice(-8);
        const hashedPassword = await bcrypt.hash(tempPassword, 10);

        /* 6️⃣ Create user */
        const user = await User.create({
            name,
            email,
            role,
            password: hashedPassword,
            tenantId: req.tenantId
        });

        /* 7️⃣ Respond */
        res.status(201).json({
            message: "User invited successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            },
            tempPassword // later replace with email invite
        });
    } catch (error) {
        console.error("Invite User Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

/* =====================================================
   LIST USERS OF TENANT (OWNER / ADMIN)
   ===================================================== */
export const getTenantUsers = async (req, res) => {
    try {
        const users = await User.find(
            { tenantId: req.tenantId },
            "-password"
        );

        res.json(users);
    } catch (error) {
        console.error("Get Users Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
