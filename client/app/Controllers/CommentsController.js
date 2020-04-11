import commentsService from "../Services/CommentsService.js";
import store from "../store.js";

function _commentDraw() {
  let template = "";
  let comments = [...store.State.comments];
  console.log("spread?", comments);

  // for (let key in comments) {
  //   let commentsArr = comments[key];
  //   console.log("commentsArr", commentsArr);
  //   template += comments[key].Template;
  //   document.getElementById("comments").innerHTML = template;
  // }
  debugger;
  comments.forEach((comment) => (template += comment.commentTemplate));
  document.getElementById("comments").innerHTML = template;
}

export default class CommentsController {
  comment(postId, event) {
    event.preventDefault();
    let form = event.target;
    let newCommentObject = {
      postId: postId,
      comment: form.comment.value,
    };

    commentsService.comment(newCommentObject);
    console.log("commentObject", newCommentObject);
    form.reset();
  }

  constructor() {
    store.subscribe("comments", _commentDraw);
  }
}
