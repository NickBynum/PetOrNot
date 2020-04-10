import CommentSchema from "../models/Comment";
import PostSchema from "../models/Post";
import UserSchema from "../models/User";
import ValueSchema from "../models/Value";
import mongoose from "mongoose";

class DbContext {
  Comments = mongoose.model("Comment", CommentSchema);
  Posts = mongoose.model("Post", PostSchema);
  Users = mongoose.model("User", UserSchema);
  Values = mongoose.model("Value", ValueSchema);
}

export const dbContext = new DbContext();
