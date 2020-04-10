import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const Post = new Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    petName: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: ObjectId, ref: "User", required: true },
    pets: { type: Number },
    passes: { type: Number, default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Post;
