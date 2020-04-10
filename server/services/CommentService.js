import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentsService {
  async getAll(query = {}) {
    let comments = await dbContext.Comments.find(query);
    return comments;
  }

  // NOTE Revisit these possibly?
  // async getByPostId(postId) {
  //   let post = await dbContext.Posts.find({_id: postId});
  //   if (!post) {
  //     throw new BadRequest("Invalid Id");
  //   }
  //   return post;
  // }

  // async getByUserId(userId) {
  //   let user = await dbContext.Users.find({ _id: userId });
  //   if (!user) {
  //     throw new BadRequest("Invalid Id");
  //   }
  //   return user;
  // }

  async getById(id) {
    let comment = await dbContext.Comments.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }

  async edit(Id, body) {
    let comment = await dbContext.Comments.findByIdAndUpdate(Id, body, {
      new: true,
    });
    return comment;
  }

  async create(body) {
    let comment = await dbContext.Comments.create(body);
    return comment;
  }

  async remove(Id) {
    let comment = await dbContext.Comments.findByIdAndDelete(Id);
    return comment;
  }
}

export const commentsService = new CommentsService();
