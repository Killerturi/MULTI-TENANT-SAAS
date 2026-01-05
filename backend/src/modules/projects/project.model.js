import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        tenantId: mongoose.Schema.Types.ObjectId,
        name: String,
        status: { type: String, default: "ACTIVE" },
        createdBy: mongoose.Schema.Types.ObjectId
    },
    { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
