import express from "express";
import { getJobs, createJob, deleteJob } from "../controllers/jobController.js";

const router = express.Router();

// GET all jobs
router.get("/", getJobs);

// CREATE a new job
router.post("/", createJob);

// DELETE a job by ID
router.delete("/:id", deleteJob);

export default router;
