import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostsService {

  async getAll(query = {}) {
    let posts = await dbContext.Posts.find(query);
    return posts;
  }

  async getById(id) {
    let post = await dbContext.Posts.findById(id);
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }

  async edit(Id, body) {
    let post = await dbContext.Posts.findByIdAndUpdate(Id, body, { new: true })
    return post
  }


  async create(body) {
    let post = await dbContext.Posts.create(body)
    return post
  }

  async remove(Id) {
    let post = await dbContext.Posts.findByIdAndDelete(Id)
    return post
  }
}

export const postsService = new PostsService();