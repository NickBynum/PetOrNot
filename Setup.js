import fs from "fs";
import BaseController from "./server/utils/BaseController";

export class Paths {
  static get Public() {
    return __dirname + "/client/";
  }
  static get Server() {
    return __dirname + "/server";
  }
  static get Controllers() {
    return this.Server + "/controllers";
  }
}

export function RegisterControllers(router) {
  let controllers = fs.readdirSync(Paths.Controllers);
  controllers.forEach(loadController);
  async function loadController(controllerName) {
    try {
      if (!controllerName.endsWith(".js")) return;
      // @ts-ignore
      let fileHandler = await import(Paths.Controllers + "/" + controllerName);
      let controllerClass = fileHandler[controllerName.slice(0, -3)];
      let controller = new controllerClass();
      if (controller instanceof BaseController) {
        router.use(controller.mount, controller.router);
      }
    } catch (e) {
      console.error(
        "[CONTROLLER ERROR] unable to load controller, potential duplication, review mount path and controller class name",
        controllerName,
        e
      );
    }
  }
}
