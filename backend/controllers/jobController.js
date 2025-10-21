import Job from "../models/Job.js";
import mongoose from "mongoose";

// GET all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ message: "Server error while fetching jobs" });
  }
};

// CREATE a new job
export const createJob = async (req, res) => {
  try {
    const { title, description, company } = req.body;
    if (!title || !description || !company) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = new Job({ title, description, company });
    const savedJob = await newJob.save();

    res.status(201).json(savedJob);
  } catch (err) {
    console.error("Error creating job:", err.message);
    res.status(500).json({ message: "Server error while creating job" });
  }
};

// DELETE a job
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid job ID" });
    }

    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    console.error("Error deleting job:", err.message);
    res.status(500).json({ message: "Server error while deleting job" });
  }
};
