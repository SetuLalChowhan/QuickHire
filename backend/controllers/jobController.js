import mongoose from "mongoose";
import Job from "../models/Job.js";
import Application from "../models/Application.js";
import validator from "validator";

// Helper function to handle async errors
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const getJobs = asyncHandler(async (req, res) => {
  const { search, location, category, page = 1 } = req.query;
  const limit = 10;
  const skip = (page - 1) * limit;

  // Build Query Object
  const query = {};
  if (search) {
    query.title = { $regex: search, $options: "i" }; // Search by title/name
  }
  if (location) {
    query.location = { $regex: location, $options: "i" };
  }
  if (category) {
    query.category = { $regex: category, $options: "i" };
  }

  // Fetch Jobs & Total Count
  const totalJobs = await Job.countDocuments(query);
  const jobs = await Job.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.json({
    success: true,
    totalJobs,
    totalPages: Math.ceil(totalJobs / limit),
    currentPage: Number(page),
    data: jobs,
  });
});

export const getJobById = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid Job ID format" });
  }

  const job = await Job.findById(req.params.id);
  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }
  res.json({ success: true, data: job });
});

export const createJob = asyncHandler(async (req, res) => {
  const { title, company, location, category, description } = req.body;

  if (!title || !company || !location || !category || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Get image path if uploaded
  const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

  const job = await Job.create({
    title,
    company,
    location,
    category,
    description,
    image: imagePath,
  });

  res.status(201).json({ success: true, data: job });
});

export const deleteJob = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid Job ID format" });
  }

  const job = await Job.findById(req.params.id);

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  await job.deleteOne();
  res.json({ success: true, message: "Job deleted successfully" });
});

export const submitApplication = asyncHandler(async (req, res) => {
  const { jobId, name, email, resumeLink, coverNote } = req.body;

  // 1. Basic Validation
  if (!jobId || !name || !email || !resumeLink || !coverNote) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // 2. Validate Job ID Format
  if (!mongoose.Types.ObjectId.isValid(jobId)) {
    return res
      .status(400)
      .json({ message: "Invalid Job ID format. Use a real MongoDB ID." });
  }

  // 3. Validate Email/URL
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!validator.isURL(resumeLink)) {
    return res.status(400).json({ message: "Invalid resume URL" });
  }

  // 4. Verify Job Exists
  const jobExists = await Job.findById(jobId);
  if (!jobExists) {
    return res
      .status(404)
      .json({ message: "The job you are applying for does not exist." });
  }

  // 5. Create Application
  const application = await Application.create({
    jobId,
    name,
    email,
    resumeLink,
    coverNote,
  });

  res.status(201).json({ success: true, data: application });
});
