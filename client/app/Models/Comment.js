export default class Comment {
  constructor(data) {
    this.comment = data.comment;
    this.userId = data.userId;
    this.postId = data.postId;
  }

  get commentTemplate() {
    return /*html*/ ` 


   <li class="list-group-item mx-1">${this.comment}</li>

    `;
  }
}
