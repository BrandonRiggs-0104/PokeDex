import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokemonService } from "../services/PokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";






function _drawPokemon() {
  let pokemon = AppState.pokemon
  let template = ''
  pokemon.forEach(p => {
    template += `
    <li class="mb-2 selectable" role="button">${p.name}</li>
    `
  })

  setHTML('pokemonList', template)
}
function _drawActivePokemon() {
  let pokemon = AppState.activePokemon
  console.log('active pokemon', pokemon);
  setHTML('activePokemon', pokemon.PokemonTemplate)
}


export class PokeMonController {
  constructor() {
    console.log('pokemon controller is connected');
    this.getPokemon()
    _drawPokemon()

    AppState.on('pokemon', _drawPokemon)

  }
  async getPokemon() {
    try {
      await pokemonService.getPokemon()

    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }


}

