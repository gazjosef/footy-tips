import mongoose from "mongoose";

const TipSchema = new mongoose.Schema(
  {
    fixtureId: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    tip: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tip", TipSchema);
