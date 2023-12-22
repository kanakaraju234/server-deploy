import mongoose from "mongoose";
const schema = new mongoose.Schema({ name: String, age: Number });
export const UserModel = mongoose.model("User", schema);
