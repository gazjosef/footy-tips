const asyncHandler = require("express-async-handler");

import { Request, Response } from "express";

// @desc        Get goals
// @route       GET /api/goals
// @acces       Private
const getGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc        Set goals
// @route       POST /api/goals
// @acces       Private
const setGoal = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goal" });
});

// @desc        Update goals
// @route       PUT /api/goals/:id
// @acces       Private
const updateGoal = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc        Delete goal
// @route       DELETE /api/goals/:id
// @acces       Private
const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
