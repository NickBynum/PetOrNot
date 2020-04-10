import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Comment = new Schema(
  {
    comment: { type: String, required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    postId: { type: ObjectId, ref: "Post", required: true },
    // Possibly add Upovtes/Downvotes
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Comment;
