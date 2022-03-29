import React, { useEffect, useState } from "react"
import {
  Container,
  Card,
  CardContent,
  Typography,
  CardActionArea
} from "@mui/material"
import {
  pokeApiPokeList,
  pokeApiPokeInfo,
  pokeApiPokeSpecs
} from "./apis/pokeapi"

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [selectedPokeInfo, setSelectedPokeInfo] = useState([])
  const limit = 18
  const offset = 1
  const selectedPoke = 1

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
    const pokeInfoGet = pokeApiPokeInfo.get(`${selectedPoke}`)
    const pokeSpecsGet = pokeApiPokeSpecs.get(`${selectedPoke}`)

    const pokeInfoTest = async () => {
      const [{ data: pokeInfo }, { data: pokeSpecs }] = await Promise.all([
        pokeInfoGet,
        pokeSpecsGet
      ])
      setSelectedPokeInfo({ ...pokeInfo, ...pokeSpecs })
    }
    pokeInfoTest()
  }, [])

  useEffect(() => {
    pokeSearch()
  }, [])

  const renderPokemons = () => {
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

  return (
    <div>
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
        {renderPokemons()}
      </Container>
    </div>
  )
}

export default App
