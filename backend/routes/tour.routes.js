import express from "express";
import { uploadTour } from "../controllers/uploadTour.js";

const router = express.Router();
router.post("/uploadTour", uploadTour);

export default router;