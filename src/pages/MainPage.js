import React from "react"
import { Container, TextField } from "@mui/material"
import { PokeList } from "../components"

const MainPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: "auto",
        p: 1
      }}
    >
      <PokeList />
    </Container>
  )
}

export default MainPage
