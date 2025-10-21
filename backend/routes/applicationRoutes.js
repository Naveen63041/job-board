import express from "express";
import { applyJob, getApplications } from "../controllers/applicationController.js";

const router = express.Router();

router.post("/", applyJob);
router.get("/", getApplications);

export default router;
