import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Goal, IGoal } from "../models/goalModel";
import { User, IUser } from "../models/userModel";

interface AuthenticatedRequest extends Request {
  user?: any; // Define the 'user' property as optional
}

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const goals = await Goal.find({ user: req.user.id });

    res.status(200).json(goals);
  }
);

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
export const setGoal = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    if (!req.body.text) {
      res.status(400);

      throw new Error("🙏 Please add a text field");
    }

    const goal = await Goal.create({
      text: req.body.text,
      user: req.user.id,
    });

    res.status(200).json(goal);
  }
);

// @desc    Update Goal
// @route   UPDATE /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }

    const user = await User.findById(req.user.id);

    // Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedGoal);
  }
);

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = asyncHandler(
  async (req: AuthenticatedRequest, res: Response) => {
    const goal = await Goal.findById(req.params.id);

    if (!goal) {
      res.status(400);
      throw new Error("Goal not found");
    }
    const user = await User.findById(req.user.id);

    // Check for user
    if (!user) {
      res.status(401);
      throw new Error("User not found");
    }

    // Make sure the logged in user matches the goal user
    if (goal.user.toString() !== user.id) {
      res.status(401);
      throw new Error("User not authorized");
    }
    res.status(200).json({ id: req.params.id });
  }
);
