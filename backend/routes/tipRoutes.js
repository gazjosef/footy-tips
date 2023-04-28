const express = require("express");
const router = express.Router();
const {
  createTip,
  deleteTip,
  getAllTips,
  getTip,
  updateTip,
} = require("../controllers/tip.js");

// import { verifyAdmin } from "../utils/verifyToken.js";

router.route("/").get(getAllTips).post(createTip);
router.route("/:id").get(getTip).put(updateTip).delete(deleteTip);

// router.get("/", getAllTips);
// router.post("/", createTip);

// router.get("/:id", getTip);
// router.put("/:id", updateTip);
// router.delete("/:id", deleteTip);

module.exports = router;
