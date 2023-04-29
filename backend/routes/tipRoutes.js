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

module.exports = router;
