import express from "express";
import { auth } from "../../middlewares/auth.middleware.js";
import { withTenant } from "../../middlewares/tenant.middleware.js";
import { allowRoles } from "../../middlewares/role.middleware.js";
import {
    createProject,
    getProjects
} from "./project.controller.js";

const router = express.Router();

/* All roles can view projects */
router.get("/", auth, withTenant, getProjects);

/* OWNER + ADMIN can create project */
router.post(
    "/",
    auth,
    withTenant,
    allowRoles("OWNER", "ADMIN"),
    createProject
);

export default router;
