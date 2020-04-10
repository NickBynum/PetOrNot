import express from "express";
import BaseController from "../utils/BaseController";
import { usersService } from "../services/UserService";
import { BadRequest } from "../utils/Errors";

export class UsersController extends BaseController {
  constructor() {
    super("api/users");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      .put("/:Id", this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove);
  }

  // SECTION Get request functions
  async getAll(_, res, next) {
    try {
      let users = await usersService.getAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let user = await usersService.getById(req.params.Id);
      if (!user) {
        throw new BadRequest("Id");
      }
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End get request functions

  // SECTION Put request functions

  async edit(req, res, next) {
    try {
      let user = await usersService.edit(req.params.Id, req.body);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End put request functions

  // SECTION User request functions

  async create(req, res, next) {
    try {
      let user = await usersService.create(req.body);
      res.send(user);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End User request functions

  // SECTION Delete request functions

  async remove(req, res, next) {
    try {
      let user = await usersService.remove(req.params.Id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End delete request functions
}
