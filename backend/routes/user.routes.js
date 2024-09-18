import express from "express";
import registerUser  from "../controllers/user-register.js";
import loginUser from "../controllers/user-login.js";
import inquiryMessage from "../controllers/contact-inquiry.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/contact", inquiryMessage);
export default router;