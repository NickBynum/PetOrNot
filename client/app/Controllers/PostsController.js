import postsService from "../Services/PostsServices.js";
import store from "../store.js";

let totalPoints = [];
console.log("before", totalPoints);
function _sortCard() {
  let posts = store.State.posts;
  posts.sort((a, b) => b.pets - a.pets);
}
function _drawThumbnail() {
  let template = "";
  let posts = store.State.posts;
  let comments = store.State.comments;
  _sortCard();
  posts.forEach((post) => (template += post.Template));
  document.getElementById("cards").innerHTML = template;
}

export default class PostsController {
  addPost(event) {
    event.preventDefault();
    let form = event.target;
    let newPostObject = {
      imgUrl: form.imgUrl.value,
      title: form.title.value,
      petName: form.petName.value,
      description: form.description.value,
    };

    postsService.addPost(newPostObject);
    console.log("postObject", newPostObject);
    form.reset();
  }
  getCommentsByPostId() {}
  pet(postId) {
    postsService.pet(postId);
  }
  pass(postId) {
    postsService.pass(postId);
  }

  constructor() {
    store.subscribe("posts", _drawThumbnail);
    console.log("postcontroller is working");
  }
}
