import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");

const Tip = require("../models/tipModel");

// @desc        Get tips
// @route       GET /api/tips
// @acces       Private
const getTips = asyncHandler(async (req: Request, res: Response) => {
  const tips = await Tip.find();

  res.status(200).json(tips);
});

// @desc        Set tip
// @route       POST /api/tips
// @acces       Private
const setTip = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const tip = await Tip.create({
    text: req.body.text,
  });

  res.status(200).json(tip);
});

// @desc        Update tip
// @route       PUT /api/tips/:id
// @acces       Private
const updateTip = asyncHandler(async (req: Request, res: Response) => {
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

// @desc        Delete tip
// @route       DELETE /api/tips/:id
// @acces       Private
const deleteTip = asyncHandler(async (req: Request, res: Response) => {
  const tip = await Tip.findById(req.params.id);

  if (!tip) {
    res.status(400);
    throw new Error("Tip not found");
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
