import postService from "../Services/PostServices.js";
import store from "../store.js"


function _postDraw() {

}

export default class PostController {













  constructor() {
    store.subscribe("posts", _postDraw);
  }
}