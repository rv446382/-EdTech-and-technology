import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getResume, createOrUpdateResume, updateResumeById, deleteResume } from "../controllers/resumeController.js";

const router = express.Router();

router.use(protect);

router.get("/", getResume);
router.post("/", createOrUpdateResume);
router.put("/:id", updateResumeById);
router.delete("/:id", deleteResume);

export default router;
