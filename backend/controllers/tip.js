const asyncHandler = require("express-async-handler");
const Tip = require("../models/tipModel");

// CREATE TIP
// ROUTE: POST /api/tips
// ACCESS: Private
const createTip = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  const tip = await Tip.create({
    text: req.body.text,
  });

  res.status(200).json(tip);
});

// UPDATE TIP
// ROUTE: POST /api/tips/:id
// ACCESS: Private
const updateTip = asyncHandler(async (req, res, next) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  const updatedTip = await Tip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTip);
});

// DELETE TIP
// ROUTE: DELETE /api/tips/:id
// ACCESS: Private
const deleteTip = asyncHandler(async (req, res, next) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  await tip.deleteOne();

  res.status(200).json({ id: req.params.id });
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
  const tips = await Tip.find();
  res.status(200).json(tips);
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
