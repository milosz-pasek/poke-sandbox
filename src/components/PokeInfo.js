import React from "react"
import { Container, Paper, Typography, Card, Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { usePokeDetailsQuery } from "../hooks/usePokeDetailsQuery"

export const PokeInfo = () => {
  // TODO
  const { id } = useParams()
  const { data, error, isError, isLoading } = usePokeDetailsQuery(id)

  const renderPokemonInfo = () => {
    if (isLoading) {
      return <h1>Loading Poke Info</h1>
    }

    if (isError) {
      return <div>Error: {error.message}</div>
    }

    return (
      <Box>
        <div>I'm a Poke info component</div> <h1>{data.name}</h1>
        <p>{data.id}</p>
      </Box>
    )
  }
  return <Container>{renderPokemonInfo()}</Container>
}
