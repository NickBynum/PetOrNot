import ValuesController from "./Controllers/ValuesController.js";
import PostsController from "./Controllers/PostsController.js";
import CommentsController from "./Controllers/CommentsController.js";

class App {
  valuesController = new ValuesController();
  postsController = new PostsController();
  commentsController = new CommentsController();
}

window["app"] = new App();
