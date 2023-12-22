import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { UserModel } from "./models/user.js";

const app = express();

app.use(express.json());
dotenv.config();

app.post("/", async (req, res) => {
  console.log("request", req.body);
  const user = new UserModel(req.body);
  try {
    const savedUser = await user.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.log("error", err);
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connect");
  })
  .catch(() => {
    console.log("disconnect");
  });

app.listen(8000, (req, res) => {
  console.log("listening");
});
