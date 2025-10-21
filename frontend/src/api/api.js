import axios from "axios";

const API_URL = "http://localhost:5000/api"; // change to your backend URL

export const getJobs = async (token) => {
  const { data } = await axios.get(`${API_URL}/jobs`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return data;
};

export const createJob = async (job, token) => {
  const { data } = await axios.post(`${API_URL}/jobs`, job, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return data;
};

// ✅ Add this function to delete a job
export const deleteJob = async (jobId, token) => {
  const { data } = await axios.delete(`${API_URL}/jobs/${jobId}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  return data;
};

// existing auth functions
export const loginUser = async (credentials) => { /*...*/ };
export const registerUser = async (user) => { /*...*/ };
