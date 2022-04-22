import { pokeApiPokeInfo } from "../apis/pokeapi"
import { useQuery } from "react-query"

const pokeInfo = "pokeInfo"

export const usePokeInfoQuery = (pokeId) => {
  const getPokeInfo = async () => {
    const { data } = await pokeApiPokeInfo.get(`/${pokeId}`)

    return data
  }

  const { data, error, isError, isLoading } = useQuery(
    `${pokeInfo}/${pokeId}`,
    getPokeInfo
  )

  return { data, error, isError, isLoading }
}
