import express from "express";
import { login, register } from "./auth.controller.js";
import { acceptInvite } from "./invite.controller.js";

const router = express.Router();

/* Login */
router.post("/login", login);
router.post("/register", register);

/* Accept invite */
router.post("/accept-invite", acceptInvite);

export default router;
