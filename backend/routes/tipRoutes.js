const express = require("express");
const router = express.Router();
// import {
//   createTip,
//   deleteTip,
//   getAllTips,
//   getTip,
//   updateTip,
// } from "../controllers/tip.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get Tips" });
});

// // CREATE
// router.post("/", createTip);

// // GET ALL
// router.get("/", getAllTips);

// // UPDATE
// router.put("/:id", updateTip);

// // DELETE
// router.delete("/:id", deleteTip);

// // GET
// router.get("/:id", getTip);

module.exports = router;
