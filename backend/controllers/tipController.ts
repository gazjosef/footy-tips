import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

const Tip = require("../models/tipModel");
const User = require("../models/userModel");

// @desc        Get tips
// @route       GET /api/tips
// @acces       Private
const getTips = asyncHandler(async (req: any, res: Response) => {
  const tips = await Tip.find({ user: req.user.id });
  res.status(200).json(tips);
});

// @desc        Set tip
// @route       POST /api/tips
// @acces       Private
const setTip = asyncHandler(async (req: any, res: Response) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a tip field");
  }

  // if (!req.body.fixture) {
  //   res.status(400);
  //   throw new Error("Please add a fixture field");
  // }

  const tip = await Tip.create({
    tip: req.body.text,
    // text: req.body.text,
    // fixture: req.body.fixture,
    user: req.user.id,
  });

  res.status(200).json(tip);
});

// @desc        Update tip
// @route       PUT /api/tips/:id
// @acces       Private
const updateTip = asyncHandler(async (req: any, res: Response) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (tip.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTip = await Tip.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTip);
});

// @desc        Delete tip
// @route       DELETE /api/tips/:id
// @acces       Private
const deleteTip = asyncHandler(async (req: any, res: Response) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the goal user
  if (tip.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await tip.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTips,
  setTip,
  updateTip,
  deleteTip,
};
