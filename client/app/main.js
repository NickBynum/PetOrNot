import ValuesController from "./Controllers/ValuesController.js";
import PostController from "./Controllers/PostController.js";

class App {
  valuesController = new ValuesController();
  postsController = new PostController();
}

window["app"] = new App();
