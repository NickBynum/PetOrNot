import express from "express";
import BaseController from "../utils/BaseController";
import { postsService } from "../services/PostService";
import { BadRequest } from "../utils/Errors";

export class PostsController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      .put('/:Id', this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove)
  }
  async getAll(_, res, next) {
    try {
      let posts = await postsService.getAll()
      res.send(posts)
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let post = await postsService.getById(req.params.Id)
      if (!post) {
        throw new BadRequest("Id")
      }
      res.send(post)
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let post = await postsService.edit(req.params.Id, req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let post = await postsService.create(req.body)
      res.send(post);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
  
  async remove(req, res, next) {
    try {
      let post = await postsService.remove(req.params.Id)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }


}