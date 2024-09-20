import express from "express";
import { uploadTour } from "../controllers/uploadTour.js";
import { getTours } from "../controllers/displayTour.controller.js";
const router = express.Router();
router.post("/uploadTour", uploadTour);
router.get("/getTours", getTours);
export default router;