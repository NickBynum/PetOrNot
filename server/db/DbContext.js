import ValueSchema from "../models/Value";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
}

export const dbContext = new DbContext();
