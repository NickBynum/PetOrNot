import express from "express";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentService";
import { BadRequest } from "../utils/Errors";

export class CommentsController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .get("/:Id", this.getById)
      // .get("", this.getByUserId)
      .put("/:Id", this.edit)
      .post("", this.create)
      .delete("/:Id", this.remove);
  }

  // SECTION Get request functions
  async getAll(req, res, next) {
    try {
      let comments = await commentsService.getAll();
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }

  // NOTE Revisit these, possibly
  

  // async getByUserId(req, res, next) {
  //   try {
  //     let post = await commentsService.getByUserId(req.params.userId);
  //     if (!post) {
  //       throw new BadRequest("Id");
  //     }
  //     res.send(post);
  //   } catch (error) {
  //     next(error);
  //   }
  // }

  async getById(req, res, next) {
    try {
      let comment = await commentsService.getById(req.params.Id);
      if (!comment) {
        throw new BadRequest("Id");
      }
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End get request functions

  // SECTION Put request functions

  async edit(req, res, next) {
    try {
      let comment = await commentsService.edit(req.params.Id, req.body);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End put request functions

  // SECTION Post request functions

  async create(req, res, next) {
    try {
      let comment = await commentsService.create(req.body);
      res.send(comment);
      //res.send(req.body);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End post request functions

  // SECTION Delete request functions

  async remove(req, res, next) {
    try {
      let comment = await commentsService.remove(req.params.Id);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }

  // !SECTION End delete request functions
}
