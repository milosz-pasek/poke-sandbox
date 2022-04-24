import React from "react"
import { Container, Paper, Typography, Card, Box, Grid } from "@mui/material"
import { useParams } from "react-router-dom"
import { usePokeDetailsQuery } from "../hooks/usePokeDetailsQuery"

export const PokeInfo = () => {
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
      <Paper
        sx={{
          position: "relative",
          bgcolor: "#F6F6F6",
          my: 4,
          p: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5aacf438-4ca1-4094-9487-0114a51f5e92/d48eji9-8a8224b3-5a72-4184-b74b-968ed811900a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhYWNmNDM4LTRjYTEtNDA5NC05NDg3LTAxMTRhNTFmNWU5MlwvZDQ4ZWppOS04YTgyMjRiMy01YTcyLTQxODQtYjc0Yi05NjhlZDgxMTkwMGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Uh1gVouk7hOV8qOxqwz1i4O26-Cp1l6VaqYbwD_g7Ww)`
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)"
          }}
        />
        <Grid container>
          <Grid item md={6} sx={{ alignSelf: "center" }}>
            <Box
              sx={{
                position: "relative",
                pr: { md: 0 }
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="white"
                gutterBottom
              >
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </Typography>
              <Typography variant="h5" color="white" paragraph>
                {"ID: "} {data.id.toString().padStart(3, "0")}
              </Typography>
              <Typography variant="p" color="white" gutterBottom>
                {data.flavor_text_entries[1].flavor_text.replace(/[\f]/gm, " ")}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sx={{ margin: "auto", justifySelf: "center" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <img
                sx={{
                  width: "100%",
                  height: "auto"
                }}
                alt={data.name}
                src={data.sprites.other["official-artwork"].front_default}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    )
  }
  return <Container>{renderPokemonInfo()}</Container>
}
