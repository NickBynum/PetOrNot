import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class UsersService {
  async getAll(query = {}) {
    let users = await dbContext.Users.find(query);
    return users;
  }

  async getById(id) {
    let user = await dbContext.Users.findById(id);
    if (!user) {
      throw new BadRequest("Invalid Id");
    }
    return user;
  }

  async edit(Id, body) {
    let user = await dbContext.Users.findByIdAndUpdate(Id, body, { new: true });
    return user;
  }

  async create(body) {
    let user = await dbContext.Users.create(body);
    return user;
  }

  async remove(Id) {
    let user = await dbContext.Users.findByIdAndDelete(Id);
    return user;
  }
}

export const usersService = new UsersService();
