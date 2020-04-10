import store from "../store.js";
import Post from "../Models/Post.js";


const _api = axios.create({
  baseURL: "//localhost:3000/api/posts/",
  timeout: 3000
})

  class PostsService {

    async addPet(newPetObject) {
      try {
        await _api.post("", newPetObject)
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
