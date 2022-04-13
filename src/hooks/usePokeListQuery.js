import { pokeApiPokeList } from "../apis/pokeapi"
import { useQuery } from "react-query"

const pokeList = "pokeList"

export const usePokeListQuery = (offset) => {
  const pokeSearch = async () => {
    const { data } = await pokeApiPokeList.get(`/pokemon`, {
      params: {
        limit: 18,
        offset
      }
    })

    const pokesWithId = data.results.map((poke) => {
      return { ...poke, id: Number(poke.url.slice(34, -1)) }
    })
    return pokesWithId
  }
  const { data, error, isError, isLoading } = useQuery(
    pokeList + offset,
    pokeSearch
  )

  return { data, error, isError, isLoading }
}
