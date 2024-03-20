import colors from "colors";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI environment variable is not defined");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "MongoDB Connected: " + colors.cyan(conn.connection.host).underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
