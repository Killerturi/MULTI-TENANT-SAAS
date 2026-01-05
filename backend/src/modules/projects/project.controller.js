import Project from "./project.model.js";
import Tenant from "../tenants/tenant.model.js";
import { PLAN_LIMITS } from "../../config/planLimits.js";

/* =====================================================
   CREATE PROJECT (OWNER / ADMIN)
   ===================================================== */
export const createProject = async (req, res) => {
    try {
        const { name } = req.body;

        /* 1️⃣ Validate input */
        if (!name) {
            return res.status(400).json({ message: "Project name is required" });
        }

        /* 2️⃣ Fetch tenant */
        const tenant = await Tenant.findById(req.tenantId);
        if (!tenant) {
            return res.status(404).json({ message: "Tenant not found" });
        }

        /* 3️⃣ Enforce PROJECT LIMIT based on PLAN */
        const limits = PLAN_LIMITS[tenant.plan];

        const projectCount = await Project.countDocuments({
            tenantId: req.tenantId
        });

        if (projectCount >= limits.projects) {
            return res.status(403).json({
                message: `Project limit reached for ${tenant.plan} plan`
            });
        }

        /* 4️⃣ Create project */
        const project = await Project.create({
            name,
            tenantId: req.tenantId,
            createdBy: req.user.userId
        });

        /* 5️⃣ Respond */
        res.status(201).json({
            message: "Project created successfully",
            project
        });
    } catch (error) {
        console.error("Create Project Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

/* =====================================================
   GET PROJECTS (ALL ROLES)
   ===================================================== */
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({
            tenantId: req.tenantId
        });

        res.json(projects);
    } catch (error) {
        console.error("Get Projects Error:", error);
        res.status(500).json({ message: "Server error" });
    }
};
