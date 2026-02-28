import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobById);

// Only Admin Can Create & Delete
router.post("/", protect, authorizeRoles("admin"), createJob);
router.delete("/:id", protect, authorizeRoles("admin"), deleteJob);

export default router;
