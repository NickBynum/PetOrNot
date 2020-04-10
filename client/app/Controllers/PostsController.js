import postsService from "../Services/PostsServices.js";
import store from "../store.js"


function _postDraw() {

}

export default class PostsController {


  addPet (event) {
    event.preventDefault()
    debugger
    let form = event.target;
    let newPetObject = {
      imgUrl: form.petUrl.value,
      title: form.title.value,
      userName: form.userName.value
    }
    console.log(event.target)
    
    postsService.addPet(newPetObject)
    form.reset()
  }













  constructor() {
    store.subscribe("posts", _postDraw);
    console.log("postcontroller is working")
  }
}