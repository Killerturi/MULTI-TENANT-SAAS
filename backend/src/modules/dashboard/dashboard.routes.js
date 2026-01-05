import express from "express";
import { auth } from "../../middlewares/auth.middleware.js";
import { withTenant } from "../../middlewares/tenant.middleware.js";
import { getDashboardStats } from "./dashboard.controller.js";

const router = express.Router();

/* All roles can view dashboard */
router.get("/", auth, withTenant, getDashboardStats);

export default router;
