const express = require("express");

const router = express.Router();

const {
  getTips,
  setTip,
  updateTip,
  deleteTip,
} = require("../controllers/tipController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTips).post(protect, setTip);
router.route("/:id").put(protect, updateTip).delete(protect, deleteTip);

module.exports = router;
