import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        tenantId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tenant",
            required: true
        },

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            unique: true,
            required: true
        },

        password: {
            type: String
        },

        role: {
            type: String,
            enum: ["OWNER", "ADMIN", "MEMBER"],
            default: "MEMBER"
        },

        /* 🔐 Invite flow fields */
        inviteToken: {
            type: String
        },

        inviteExpires: {
            type: Date
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
