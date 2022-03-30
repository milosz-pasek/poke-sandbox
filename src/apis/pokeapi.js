import axios from "axios"

export const pokeApiPokeList = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})

export const pokeApiPokeInfo = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon"
})

export const pokeApiPokeSpecs = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon-species"
})
