const asyncHandler = require("express-async-handler");
const Tip = require("../models/tipModel");
const User = require("../models/userModel");

// *** CREATE TIP
// ROUTE: POST /api/tips
// ACCESS: Private
const createTip = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  const tip = await Tip.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(tip);
});

// *** UPDATE TIP
// ROUTE: POST /api/tips/:id
// ACCESS: Private
const updateTip = asyncHandler(async (req, res, next) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  const user = await User.findById(req.user.id);

  // CHECK FOR USER
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // LOGIN USER MATCHES TIP USER
  if (tip.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTip = await Tip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTip);
});

// *** DELETE TIP
// ROUTE: DELETE /api/tips/:id
// ACCESS: Private
const deleteTip = asyncHandler(async (req, res, next) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  const user = await User.findById(req.user.id);

  // CHECK FOR USER
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // LOGIN USER MATCHES TIP USER
  if (tip.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await tip.deleteOne();

  res.status(200).json({ id: req.params.id });
});

// *** GET TIP
// ROUTE: GET /api/tips/:id
// ACCESS: Private
const getTip = asyncHandler(async (req, res, next) => {
  res.status(200).json({ message: `Get Tip ${req.params.id}` });
});

// *** GET ALL TIPS
// ROUTE: GET /api/tips
// ACCESS: Private
const getAllTips = asyncHandler(async (req, res, next) => {
  const goals = await Tip.find({ user: req.user.id });
  res.status(200).json(goals);
});

module.exports = {
  createTip,
  updateTip,
  deleteTip,
  getTip,
  getAllTips,
};
