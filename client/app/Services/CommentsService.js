import store from "../store.js";
import Comment from "../Models/Comment.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "//localhost:3000/api/comments/",
  timeout: 3000,
});

class CommentsService {
  getComments() {
    _api.get().then((res) => {
      console.log("results", res.data);
      let comments = res.data.map(
        (rawCommentData) => new Comment(rawCommentData)
      );
      store.commit("comments", comments);
      console.log("comments", comments);
    });
  }
  async comment(newCommentObject) {
    console.log(newCommentObject);
    try {
      await _api.post("", newCommentObject);
      let newComment = new Comment(newCommentObject);
      let comments = [newComment, ...store.State.comments];
      store.commit("comments", comments);
    } catch (error) {
      console.error(error);
    }
  }
  constructor() {
    console.log("commentservice is working");
    this.getComments();
  }
}

const service = new CommentsService();
export default service;
