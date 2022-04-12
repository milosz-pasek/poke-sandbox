import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container
} from "@mui/material"
import { useQuery } from "react-query"

import { pokeApiPokeList } from "../apis/pokeapi"

const PokeList = () => {
  const limit = 18
  const offset = 0

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

  const { data, error, isError, isLoading } = useQuery("pokeList", pokeSearch)

  const renderPokemonList = () => {
    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error: {error.message}</div>
    }

    return data.map((pokemon) => {
      return (
        <Card key={pokemon.name} sx={{ minWidth: 300, maxwidth: 345, m: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: {pokemon.id.toString().padStart(3, "0")}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
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
