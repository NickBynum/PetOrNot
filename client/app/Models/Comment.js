export default class Comment {
  constructor(data) {
    this.comment = data.comment
    this.userId = data.userId
    this.postId = data.postId
  }

  get Template() {

    return /*html*/` 

  <li class="list-group-item"><strong>${this.petName}</strong>: ${this.comment}</li>
  `
  }
}