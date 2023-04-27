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
router.post("/", createTip);

// GET ALL
router.get("/", getAllTips);

// UPDATE
router.put("/:id", updateTip);

// DELETE
router.delete("/:id", deleteTip);

// GET
router.get("/:id", getTip);

export default router;
