import store from "../store.js";
import Post from "../Models/Post.js";

// @ts-ignore
const _api = axios.create({
  baseURL: "//localhost:3000/api/posts/",
  timeout: 3000,
});

class PostsService {
  getPosts() {
    _api.get().then((res) => {
      let posts = res.data.map((rawPostData) => new Post(rawPostData));
      store.commit("posts", posts);
    });
  }

  // getCommentsByPostId(postId) {
  //   debugger;
  //   _api.get(postId + "/comments").then((res) => {
  //     console.log("comments", res);
  //     store.commit("messages", res);
  //     let comments = res.data.map(
  //       (rawCommentData) => new Comment(rawCommentData)
  //     );
  //     store.commit("comments", comments);
  //   });
  // }

  async addPost(newPostObject) {
    console.log(newPostObject);
    try {
      await _api.post("", newPostObject);
      let newPost = new Post(newPostObject);
      let posts = [newPost, ...store.State.posts];
      store.commit("posts", posts);
    } catch (error) {
      console.error(error);
    }
  }
  async pet(postId) {
    let foundPost = store.State.posts.find((post) => post.id == postId);
    if (foundPost) {
      foundPost.pets++;
      try {
        await _api.put(postId, foundPost);
        this.getPosts();
      } catch (error) {
        console.error(error);
      }
    }
  }

  async pass(postId) {
    let foundPost = store.State.posts.find((post) => post.id == postId);
    if (foundPost) {
      foundPost.passes++;
      try {
        await _api.put(postId, foundPost);
        this.getPosts();
      } catch (error) {
        console.error(error);
      }
    }
  }

  constructor() {
    console.log("postservice is working");
    this.getPosts();
  }
}
const service = new PostsService();
export default service;
