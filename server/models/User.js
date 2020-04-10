import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema(
  {
    userName: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default User;
