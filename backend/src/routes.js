import express from "express";
import authRoutes from "./modules/auth/auth.routes.js";
import projectRoutes from "./modules/projects/project.routes.js";
import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";
import userRoutes from "./modules/users/user.routes.js";




const router = express.Router();


router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/users", userRoutes);



export default router;
