import React, { useState } from "react";
import { createJob } from "../api/api";

const JobForm = ({ token, onJobCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob({ title, description, company }, token);
      setTitle("");
      setDescription("");
      setCompany("");
      onJobCreated();
    } catch (err) {
      console.error("Error creating job:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Job Title" />
      <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create Job</button>
    </form>
  );
};

export default JobForm;
