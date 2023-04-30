const express = require("express");
const router = express.Router();
const {
  createTip,
  deleteTip,
  getAllTips,
  getTip,
  updateTip,
} = require("../controllers/tip.js");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllTips).post(protect, createTip);
router
  .route("/:id")
  .get(protect, getTip)
  .put(protect, updateTip)
  .delete(protect, deleteTip);

module.exports = router;
