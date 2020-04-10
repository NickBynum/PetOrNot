export default class Post {
  constructor(data) {
      this.title = data.title
      this.body = data.body
      this.imgUrl = data.imgUrl
      this.id = data.id
      this.petName = data.petName
      this.pet = data.pet
      this.pass = data.pass


  }

  get Template() {
      return this.title
  }
}