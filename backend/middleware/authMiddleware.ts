import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User, IUser } from "../models/userModel";

// Extend the Request interface to include a user property
interface CustomRequest extends Request {
  user?: IUser | null;
}

export const protect = asyncHandler(
  async (req: CustomRequest, res: Response, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1];

        // Verify token
        const jwtSecret = process.env.JWT_SECRET || ""; // Ensure process.env.JWT_SECRET is properly typed as string
        const decoded = jwt.verify(token, jwtSecret) as JwtPayload;

        // Get user from token
        req.user = (await User.findById(decoded.id).select(
          "-password"
        )) as IUser;

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Not authorized ");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);
