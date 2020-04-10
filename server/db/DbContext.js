import ValueSchema from "../models/Value";
import PostSchema from "../models/Post";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Posts = mongoose.model("Post", PostSchema);
}

export const dbContext = new DbContext();
