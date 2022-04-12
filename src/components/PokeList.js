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

    const pokesWithId = data.results.map((poke) => {
      return { ...poke, id: Number(poke.url.slice(34, -1)) }
    })

    console.log(pokesWithId)
    setPokemons(pokesWithId)
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
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </Typography>
              <Typography variant="body2">
                ID: {pokemon.id.toString().padStart(3, "0")}
              </Typography>
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
