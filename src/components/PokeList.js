import React, { useState } from "react"
import { Container, Pagination } from "@mui/material"
import { usePokeListQuery } from "../hooks/usePokeListQuery"
import { PokeCard } from "../components"
import { useParams, useNavigate } from "react-router-dom"

export const PokeList = () => {
  const [limit, setLimit] = useState(18)

  const { page } = useParams()
  const [offset, setOffset] = useState(0 + (page - 1) * 18)
  const { data, error, isError, isLoading } = usePokeListQuery(offset, limit)

  const navigate = useNavigate()

  const handleChange = (e, value) => {
    setOffset(0 + (value - 1) * 18)
    navigate(`/pokelist/${value}`)
  }

  const renderPokemonList = () => {
    if (isLoading) {
      return [...Array(limit)].map((e, i) => (
        <PokeCard key={i} isLoading={true} />
      ))
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
      <Pagination count={50} page={parseInt(page)} onChange={handleChange} />
    </>
  )
}
