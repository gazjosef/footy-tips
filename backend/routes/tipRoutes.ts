import express from "express";

const router = express.Router();

const {
  getTips,
  setTip,
  updateTip,
  deleteTip,
} = require("../controllers/tipController");

router.route("/").get(getTips).post(setTip);
router.route("/:id").put(updateTip).delete(deleteTip);

module.exports = router;
