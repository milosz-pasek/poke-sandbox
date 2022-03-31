import React, { useState, useEffect } from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container
} from "@mui/material"

import { pokeApiPokeList } from "../apis/pokeapi"

const PokeList = () => {
  const [pokemons, setPokemons] = useState([])
  const limit = 18
  const offset = 0

  const pokeSearch = async () => {
    const { data } = await pokeApiPokeList.get(`/pokemon`, {
      params: {
        limit,
        offset
      }
    })
    console.log(data.results)
    setPokemons(data.results)
  }

  useEffect(() => {
    pokeSearch()
  }, [])

  const renderPokemonList = () => {
    return pokemons.map((pokemon) => {
      return (
        <Card key={pokemon.name} sx={{ minWidth: 300, maxWidth: 345, m: 1 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name}
              </Typography>
              <Typography variant="body2">{pokemon.name}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    })
  }

  return pokemons ? (
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
  ) : (
    <div>Loading...</div>
  )
}

export default PokeList
