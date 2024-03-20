import { Request, Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { User, IUser } from "../models/userModel";

// Define a custom interface for your request object
interface CustomRequest extends Request {
  user?: any; // Define the 'user' property as optional
}

// @desc    Register User
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    // Has password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  }
);

// @desc    Authenticate A User
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Private
export const getMe = asyncHandler(async (req: CustomRequest, res: Response) => {
  const { _id, name, email } = (await User.findById(req.user.id)) as IUser;

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

const generateToken = (id: SignOptions) => {
  const jwtSecret = process.env.JWT_SECRET || ""; // Ensure process.env.JWT_SECRET is properly typed as string

  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "30d",
  });
};
