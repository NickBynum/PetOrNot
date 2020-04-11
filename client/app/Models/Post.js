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
<div class="m-auto col-12 col-md-6 py-2">
    <div id="petCardOutput" class="card border-dark rounded shadow mx-2 my-2">
        <img src="https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-320-80.jpeg" class="card-img-top img-fluid"
            alt="...">
        <div class="card-body rounded off-white">
            <h3 class="card-text">${this.title}</h3>
            <h5 class="card-text">${this.description}</h5>
            <h6 class="card-text text-center">${this.pets} Pets & ${this.passes} Passes</h6>
            <div class="justify-content-center d-flex btn-group"><button onclick="app.postsController.pet('${this.postId}')"
                    class="btn  light-blue text-light">Pet</button><button onclick="app.postsController.pass('${this.postId}')" class="btn  purple text-light ">Pass</button>
            </div>

            <form onsubmit="app.commentsController.comment('${this.postId}', event)">
                <div class="form-group pt-3">
                    <input type="text" class="form-control" name="comment" id="exampleFormControlTextarea1" rows="2"
                        placeholder="Add a comment..."/>
                </div>
            </form>
            <ul id="comments" class="list-group"></ul>
            <!-- this will need to be a second template, only draws if there is a comment. Comments need to be in an unordered list -->



            <!-- this needs to be in the second template -->

        </div>
    </div>
</div>
      `;
  }
}
