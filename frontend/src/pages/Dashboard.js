import React, { useState, useEffect } from "react";
import { getJobs, createJob, deleteJob as apiDeleteJob } from "../api/api";
import { useNavigate } from "react-router-dom";
import "../styles/dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const BASE_URL = "http://localhost:5000/api/jobs";


  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (!token) navigate("/login");
    else fetchJobs();
  }, [token]);

  const fetchJobs = async () => {
    try {
      const data = await getJobs(token);
      setJobs(data);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    }
  };

  const handleCreateJob = async (e) => {
    e.preventDefault();
    try {
      const data = await createJob({ title, description, company }, token);
      setJobs((prev) => [...prev, data]);
      setTitle("");
      setDescription("");
      setCompany("");
    } catch (err) {
      console.error("Failed to create job:", err);
    }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    try {
      await apiDeleteJob(id, token);
      setJobs((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Failed to delete job:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Job Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="create-job-form">
        <h2>Create Job</h2>
        <form onSubmit={handleCreateJob}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <button type="submit">Add Job</button>
        </form>
      </div>

      <h2>All Jobs</h2>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h3>{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="description">{job.description}</p>
            <button
              className="btn delete"
              onClick={() => handleDeleteJob(job._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
