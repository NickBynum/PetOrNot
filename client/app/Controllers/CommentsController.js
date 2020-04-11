import commentsService from "../Services/CommentsService.js";
import store from "../store.js";

function _commentDraw() {
  //let template = "";
  // let postCommentElements = {
  //   // key : value
  //   // postId : {element, template}
  // };
  // let comments = [...store.State.comments];
  // comments.forEach((comment) => {
  //   let found = postCommentElements[comment.postId];
  //   if (!found) {
  //     postCommentElements[comment.postId] = {
  //       element: document.getElementById("comments-" + comment.postId),
  //       template: "",
  //     };
  //     found = postCommentElements[comment.postId];
  //   }
  //   found.template += comment.commentTemplate;
  // });
  // for (let postId in postCommentElements) {
  //   let postCommentContainer = postCommentElements[postId];
  //   postCommentContainer.element.innerHTML = postCommentContainer.template;
  // }
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

  showPostComments(postId) {
    let comments = store.State.comments.filter(
      (comment) => comment.postId == postId
    );
    let commentsElem = document.getElementById("comments-" + postId);
    let template = "";
    comments.forEach((comment) => (template += comment.commentTemplate));
    commentsElem.innerHTML = template;
  }
  hidePostComments(postId) {
    let commentsElem = document.getElementById("comments-" + postId);
    commentsElem.classList.toggle("d-none");
  }

  constructor() {
    store.subscribe("comments", _commentDraw);
  }
}
