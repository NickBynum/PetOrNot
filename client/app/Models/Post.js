export default class Post {
  constructor(data) {
      this.title = data.title
      this.imgUrl = data.imgUrl
      this.id = data.id
      this.petName = data.petName
      this.pet = data.pet
      this.pass = data.pass
      this.description = data.description
      this.userId = data.userId || ""



  }

  get Template() {
      return this.title
  }
}