import { pokeApiPokeInfo, pokeApiPokeSpecs } from "../apis/pokeapi"
import { useQuery } from "react-query"

const pokeInfo = "pokeInfo"

export const usePokeDetailsQuery = (pokeId) => {
  const getPokeInfo = async () => {
    const [{ data: pokeDetails }, { data: pokeSpecs }] = await Promise.all([
      pokeApiPokeInfo.get(`/${pokeId}`),
      pokeApiPokeSpecs.get(`/${pokeId}`)
    ])

    return { ...pokeDetails, ...pokeSpecs }
  }

  return useQuery(`${pokeInfo}/${pokeId}`, getPokeInfo)
}
