import axios from "axios"

const pokeApiPokeList = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})

const pokeApiPokeInfo = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})

const pokeApiPokeSpecs = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon-species"
})

export { pokeApiPokeList, pokeApiPokeInfo, pokeApiPokeSpecs }
