import postsService from "../Services/PostsServices.js";
import store from "../store.js"


function _postDraw() {

}

export default class PostsController {


  addPet (event) {
    event.preventDefault()
    let form = event.target;
    let newPetObject = {
      imgUrl: form.imgUrl.value,
      title: form.title.value, 
      petName: form.petName.value,
      description: form.description.value
    }
    
    postsService.addPet(newPetObject)
    console.log("petObject", newPetObject)
    form.reset()
    
  }

  constructor() {
    store.subscribe("posts", _postDraw);
    console.log("postcontroller is working")
  }
}