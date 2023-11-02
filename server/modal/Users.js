import mongoose, { Schema, model } from "mongoose";

const UsersSchema = new Schema({
  phone: { type: String, type: Number, required: true },
  // email: { type: String, type: email, required: true }, 
  name: { type: String, type: String, required: true },
});

const Users = model("users", UsersSchema);
