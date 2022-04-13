import React, { useState, useEffect } from "react"
import { Pagination } from "@mui/material"
import { usePokeListQuery } from "../hooks/usePokeListQuery"
import { PokeCard } from "../components"

export const PokeList = () => {
  const [offset, setOffset] = useState(0)
  const { data, error, isError, isLoading } = usePokeListQuery(offset)

  const handleChange = (e, value) => {
    setOffset(0 + (value - 1) * 18)
  }

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

  return (
    <>
      {renderPokemonList()}
      <div></div>
      <Pagination count={10} onChange={handleChange} />
    </>
  )
}
