import Tip from "../models/Tip.js";

// CREATE TIP
// ROUTE: POST /api/tips
// ACCESS: Private
export const createTip = (req, res) => {
  res.status(200).json({ message: "Create Tip" });
  // const newTip = new Tip(req.body);

  // try {
  //   const savedTip = await newTip.save();
  //   res.status(200).json(savedTip);
  // } catch (error) {
  //   next(error);
  // }
};

// UPDATE TIP
// ROUTE: POST /api/tips/:id
// ACCESS: Private
export const updateTip = async (req, res, next) => {
  res.status(200).json({ message: "Update Tip" });
  // try {
  //   const updatedTip = await Tip.findByIdAndUpdate(
  //     req.params.id,
  //     {
  //       $set: req.body,
  //     },
  //     {
  //       new: true,
  //     }
  //   );
  //   res.status(200).json(updatedTip);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

// DELETE TIP
// ROUTE: DELETE /api/tips/:id
// ACCESS: Private
export const deleteTip = async (req, res, next) => {
  res.status(200).json({ message: "Delete Tip" });
  // try {
  //   await Tip.findByIdAndDelete(req.params.id);
  //   res.status(200).json("Tip has been deleted");
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

// GET TIP
// ROUTE: GET /api/tips/:id
// ACCESS: Private
export const getTip = async (req, res, next) => {
  res.status(200).json({ message: "Get Tip" });
  // try {
  //   const tip = await Tip.find(req.params.id);
  //   res.status(200).json(tip);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
};

// GET ALL TIPS
// ROUTE: GET /api/tips
// ACCESS: Private
export const getAllTips = async (req, res, next) => {
  res.status(200).json({ message: "Get All Tips" });
  // try {
  //   const tips = await Tip.find();
  //   res.status(200).json(tips);
  // } catch (error) {
  //   next(error);
  // }
};
