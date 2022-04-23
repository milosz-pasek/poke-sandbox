import { pokeApiPokeList } from "../apis/pokeapi"
import { useQuery } from "react-query"

const pokeList = "pokeList"

export const usePokeListQuery = (offset, limit) => {
  const pokeSearch = async () => {
    const { data } = await pokeApiPokeList.get(`/pokemon`, {
      params: {
        limit,
        offset
      }
    })

    const pokesWithId = data.results.map((poke) => {
      return { ...poke, id: Number(poke.url.slice(34, -1)) }
    })
    return pokesWithId
  }

  return useQuery(`${pokeList}/${offset + 1}`, pokeSearch)
}
