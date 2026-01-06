import User from "../users/user.model.js";
import bcrypt from "bcryptjs";

/* =====================================================
   ACCEPT INVITE & SET PASSWORD
   ===================================================== */
export const acceptInvite = async (req, res) => {
    try {
        const { token, password } = req.body;

        if (!token || !password) {
            return res.status(400).json({
                message: "Token and password are required"
            });
        }

        const user = await User.findOne({
            inviteToken: token,
            inviteExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid or expired invite"
            });
        }

        user.password = await bcrypt.hash(password, 10);
        user.inviteToken = undefined;
        user.inviteExpires = undefined;

        await user.save();

        res.json({
            message: "Account activated successfully. You can now log in."
        });
    } catch (error) {
        console.error("Accept Invite Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
