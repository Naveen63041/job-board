import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    resume: { type: String }, // URL or filename of resume
    status: { type: String, default: "Pending" }
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const Application = mongoose.model("Application", applicationSchema);

export default Application; // ✅ default export
