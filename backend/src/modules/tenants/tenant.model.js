import mongoose from "mongoose";

const tenantSchema = new mongoose.Schema(
    {
        name: String,

        plan: {
            type: String,
            enum: ["FREE", "PRO", "ENTERPRISE"],
            default: "FREE"
        },

        usage: {
            type: Number,
            default: 0 // percentage
        }
    },
    { timestamps: true }
);

export default mongoose.model("Tenant", tenantSchema);
