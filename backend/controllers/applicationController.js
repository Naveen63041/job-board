import Application from "../models/Application.js";

export const applyJob = async (req, res) => {
  try {
    const { job, applicant, resume } = req.body;
    const application = await Application.create({ job, applicant, resume });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate("job").populate("applicant");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
