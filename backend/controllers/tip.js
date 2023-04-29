const asyncHandler = require("express-async-handler");
// import Tip from "../models/Tip.js";

// CREATE TIP
// ROUTE: POST /api/tips
// ACCESS: Private
const createTip = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Create Tip" });
  // const newTip = new Tip(req.body);

  // try {
  //   const savedTip = await newTip.save();
  //   res.status(200).json(savedTip);
  // } catch (error) {
  //   next(error);
  // }
});

// UPDATE TIP
// ROUTE: POST /api/tips/:id
// ACCESS: Private
const updateTip = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Update Tips ${req.params.id}` });
  // try {
  //   const updatedTip = await Tip.findByIdAndUpdate(
  //     req.params.id,
  //     {
  //       $set: req.body,
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  //   res.status(200).json(updatedTip);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

// DELETE TIP
// ROUTE: DELETE /api/tips/:id
// ACCESS: Private
const deleteTip = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Delete Tips ${req.params.id}` });
  // try {
  //   await Tip.findByIdAndDelete(req.params.id);
  //   res.status(200).json("Tip has been deleted");
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

// GET TIP
// ROUTE: GET /api/tips/:id
// ACCESS: Private
const getTip = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Get Tip ${req.params.id}` });
  // try {
  //   const tip = await Tip.find(req.params.id);
  //   res.status(200).json(tip);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});

// GET ALL TIPS
// ROUTE: GET /api/tips
// ACCESS: Private
const getAllTips = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: "Get All Tips" });
  // try {
  //   const tips = await Tip.find();
  //   res.status(200).json(tips);
  // } catch (error) {
  //   next(error);
  // }
});

module.exports = {
  createTip,
  updateTip,
  deleteTip,
  getTip,
  getAllTips,
};
