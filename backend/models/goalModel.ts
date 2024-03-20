import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the document (instance of the model)
export interface IGoal extends Document {
  user: mongoose.Schema.Types.ObjectId;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const goalSchema: Schema<IGoal> = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

// Define the model
export const Goal: Model<IGoal> = mongoose.model<IGoal>("Goal", goalSchema);
