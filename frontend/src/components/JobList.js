import { useState } from "react";
import ApplicationForm from "./ApplicationForm";

const JobList = ({ jobs }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div>
      <h3>Job Listings</h3>
      {jobs.map((job) => (
        <div key={job._id} style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
          <p>{job.company} | {job.location}</p>
          <button onClick={() => setSelectedJob(job)}>Apply</button>
        </div>
      ))}
      {selectedJob && (
        <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobList;
