import express from "express";
import dotenv from "dotenv";
dotenv.config();
import goalRoutes from "./routes/goalRoutes";
import userRoutes from "./routes/userRoutes";
import { errorHandler } from "./middleware/errorMiddleware";
import { connectDB } from "./config/db";

const startServer = async () => {
  const port: number | string = process.env.PORT || 5001;

  connectDB();
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/goals", goalRoutes);
  app.use("/api/users", userRoutes);
  app.use(errorHandler);

  app.listen(port, () => console.log(`Server started on port ${port}`));
};

startServer().catch((error: Error) =>
  console.error("Error starting server:", error)
);
