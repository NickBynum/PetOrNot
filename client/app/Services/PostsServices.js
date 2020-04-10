import store from "../store.js";
import Post from "../Models/Post.js";


// let _Api =

  class PostsService {

    async addPet(newPetObject) {
      try {
        let newPost = new Post(newPetObject)
        let posts = [newPost, ...store.State.posts]
        store.commit("posts", posts);
      }
      catch (error) { console.log(error) };
      ;
    }



    constructor() {
      console.log("postservice is working");

    }
  }
const service = new PostsService();
export default service;
