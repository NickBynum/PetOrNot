import commentsService from "../Services/CommentsService.js";
import store from "../store.js"


function _commentDraw() {

}

export default class CommentsController {

  add













  constructor() {
    store.subscribe("comments", _commentDraw);
  }
}