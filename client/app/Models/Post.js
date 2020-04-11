export default class Post {
  constructor(data) {
    this.postId = data._id;
    this.title = data.title; // Thumbnail & Detailed Post
    this.imgUrl = data.imgUrl; // Thumbnail & Detailed Post
    this.id = data.id; // Do not display
    this.petName = data.petName; // Thumbnail & Detailed Post
    this.pets = data.pets || 0; // Detailed view only
    this.passes = data.passes || 0; // Detailed view only
    this.description = data.description; // Detailed view only
    this.userId = data.userId || "";
  }

  get Template() {
    return /*html*/ `
    <div class="col-sm-8 col-md-6 col-lg-4 mx-auto card m-2 text-center">
    <button type="button" class="close text-danger ml-auto" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
    <img src="//place-hold.it/200" class="card-img-top img-fluid" alt="...">
    <p>${this.imgUrl}</p>
    <p>${this.petName}</p>
    <p>${this.title}</p>
      <p>${this.description}</p>
      <span class="d-flex justify-content-around"><button class="btn btn-success" onclick="app.postsController.pet('${this.postId}')">Pet ${this.pets}</button><button class="btn btn-danger" onclick="app.postsController.pass('${this.postId}')">Pass ${this.passes}</button></span>
    </div>
    
      `;
  }
}
