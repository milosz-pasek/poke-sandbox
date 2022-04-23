import { pokeApiPokeInfo } from "../apis/pokeapi"
import { useQuery } from "react-query"

const pokeInfo = "pokeInfo"

export const usePokeDetailsQuery = (pokeId) => {
  const getPokeInfo = async () => {
    const { data } = await pokeApiPokeInfo.get(`/${pokeId}`)

    return data
  }

  return useQuery(`${pokeInfo}/${pokeId}`, getPokeInfo)
}
