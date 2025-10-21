import React, { useState } from "react";
import axios from "axios";

const ApplicationForm = ({ jobId, token }) => {
  const [resume, setResume] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:5000/api/jobs/${jobId}/apply`,
        { resume },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Application submitted!");
    } catch (err) {
      setMessage("Failed to submit application");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Paste resume text here" />
      <button type="submit">Apply</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ApplicationForm;
