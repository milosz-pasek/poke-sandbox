import React from "react"
import { Container } from "@mui/material"

import { usePokeListQuery } from "../hooks/usePokeListQuery"
import { PokeCard } from "../components"

const PokeList = () => {
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

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        m: "auto",
        p: 1
      }}
      maxWidth="lg"
    >
      {renderPokemonList()}
    </Container>
  )
}

export default PokeList
