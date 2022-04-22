import React from "react"
import { useParams } from "react-router-dom"
import { usePokeInfoQuery } from "../hooks/usePokeInfoQuery"

export const PokeInfo = () => {
  const { id } = useParams()
  const { data, error, isError, isLoading } = usePokeInfoQuery(id)

  const renderPokemonInfo = () => {
    if (isLoading) {
      return <h1>Loading Poke Info</h1>
    }

    if (isError) {
      return <div>Error: {error.message}</div>
    }

    return (
      <>
        <div>I'm a Poke info component</div> <h1>{data.name}</h1>
        <p>{data.id}</p>
      </>
    )
  }

  return <>{renderPokemonInfo()}</>
}
