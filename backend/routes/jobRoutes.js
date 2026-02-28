import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
} from "../controllers/jobController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", getJobs);
router.get("/:id", getJobById);

// Only Admin Can Create (with Image) & Delete
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  upload.single("image"),
  createJob,
);
router.delete("/:id", protect, authorizeRoles("admin"), deleteJob);

export default router;
