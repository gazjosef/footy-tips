import express from "express";
import {
  createTip,
  deleteTip,
  getAllTips,
  getTip,
  updateTip,
} from "../controllers/tip.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createTip);

// UPDATE
router.put("/:id", verifyAdmin, updateTip);

// DELETE
router.delete("/:id", verifyAdmin, deleteTip);

// GET
router.get("/:id", getTip);

// GET ALL
router.get("/", getAllTips);

export default router;
