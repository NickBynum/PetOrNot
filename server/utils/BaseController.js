import express from "express";

export default class BaseController {
  constructor(mount) {
    if (typeof mount != "string") {
      throw new Error("Unable to register controller no mount path specified");
    }
    if (mount[0] != "/") {
      mount = "/" + mount;
    }
    this.mount = mount;
    this.router = express.Router();
  }
}