import express from "express";
import { auth } from "../../middlewares/auth.middleware.js";
import { withTenant } from "../../middlewares/tenant.middleware.js";
import { allowRoles } from "../../middlewares/role.middleware.js";
import {
    inviteUser,
    getTenantUsers
} from "./user.controller.js";

const router = express.Router();

/* OWNER + ADMIN: Invite user */
router.post(
    "/invite",
    auth,
    withTenant,
    allowRoles("OWNER", "ADMIN"),
    inviteUser
);

/* OWNER + ADMIN: View users of tenant */
router.get(
    "/",
    auth,
    withTenant,
    allowRoles("OWNER", "ADMIN"),
    getTenantUsers
);

export default router;
