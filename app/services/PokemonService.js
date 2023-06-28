import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"

export class PokemonService {
  async getPokemon() {
    const response = await pokeApi.get()
    console.log('pokemon', response.data);
    AppState.pokemon = response.data.results.map(p => new Pokemon(p))
    console.log('pokemon in appstate', AppState.pokemon);
  }
}


export const pokemonService = new PokemonService()