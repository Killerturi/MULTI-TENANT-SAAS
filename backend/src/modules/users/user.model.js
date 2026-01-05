import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        tenantId: { type: mongoose.Schema.Types.ObjectId, ref: "Tenant" },
        name: String,
        email: { type: String, unique: true },
        password: String,
        role: { type: String, default: "MEMBER" }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
