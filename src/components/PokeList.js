import React from "react"
import { Container, Pagination } from "@mui/material"

import { usePokeListQuery } from "../hooks/usePokeListQuery"
import { PokeCard } from "../components"

export const PokeList = () => {
  const offset = 0
  const { data, error, isError, isLoading } = usePokeListQuery(offset)

  const renderPokemonList = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error: {error.message}</div>
    }

    if (!data.length) {
      return <div>Empty List returned</div>
    }

    return data.map((pokemon) => {
      return <PokeCard key={pokemon.id} pokeData={pokemon} />
    })
  }

  return <>{renderPokemonList()}</>
}
