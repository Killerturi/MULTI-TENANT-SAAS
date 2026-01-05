import express from "express";
import { auth } from "../../middlewares/auth.middleware.js";
import { withTenant } from "../../middlewares/tenant.middleware.js";
import { allowRoles } from "../../middlewares/role.middleware.js";
import {
    createTask,
    getTasks,
    updateTaskStatus
} from "./task.controller.js";

const router = express.Router();

/* OWNER + ADMIN */
router.post(
    "/",
    auth,
    withTenant,
    allowRoles("OWNER", "ADMIN"),
    createTask
);

/* ALL ROLES */
router.get("/:projectId", auth, withTenant, getTasks);

/* MEMBER (only assigned task) */
router.patch(
    "/:taskId/status",
    auth,
    withTenant,
    updateTaskStatus
);

export default router;
