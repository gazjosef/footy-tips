// const express = require("express");
import express, { Request, Response } from "express";
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

const app = express();

app.get("/api/goals", (req: Request, res: Response) => {
  res.json({ message: "Get Goals" });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
