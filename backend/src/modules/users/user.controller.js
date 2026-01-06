import User from "./user.model.js";
import Tenant from "../tenants/tenant.model.js";
import { PLAN_LIMITS } from "../../config/planLimits.js";
import crypto from "crypto";

/* =====================================================
   INVITE USER (OWNER / ADMIN) – EMAIL TOKEN FLOW
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

        /* 3️⃣ Enforce USER LIMIT */
        const limits = PLAN_LIMITS[tenant.plan];
        const userCount = await User.countDocuments({
            tenantId: req.tenantId
        });

        if (userCount >= limits.users) {
            return res.status(403).json({
                message: `User limit reached for ${tenant.plan} plan`
            });
        }

        /* 4️⃣ Check existing user */
        const existingUser = await User.findOne({
            email,
            tenantId: req.tenantId
        });

        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User already exists in this tenant" });
        }

        /* 5️⃣ Generate invite token */
        const inviteToken = crypto.randomBytes(32).toString("hex");

        /* 6️⃣ Create invited user (NO PASSWORD YET) */
        const user = await User.create({
            name,
            email,
            role,
            tenantId: req.tenantId,
            inviteToken,
            inviteExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        /* 7️⃣ Send response (email sending later) */
        res.status(201).json({
            message: "Invite sent successfully",
            inviteLink: `http://localhost:3000/accept-invite?token=${inviteToken}`
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
