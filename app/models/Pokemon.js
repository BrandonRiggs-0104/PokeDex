export class Pokemon {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.nickname = data.nickname
    this.img = data.img
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
    this.creatorId = data.creatorId
  }

  get PokemonTemplate() {
    return `
    <div class="container-fluid">
    
    `
  }
}