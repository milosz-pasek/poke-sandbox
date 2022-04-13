import React from "react"
import { Container, Pagination } from "@mui/material"
import { PokeList } from "../components"

const MainPage = () => {
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
      <PokeList />
    </Container>
  )
}

export default MainPage
