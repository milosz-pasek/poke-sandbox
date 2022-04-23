import React from "react"
import { Box, Container, Typography, Link, Divider } from "@mui/material"

const footerData = {
  name: "Milosz Pasek",
  ghLink: "https://github.com/TaricEastDog"
}

export const Footer = () => {
  return (
    <>
      <Divider></Divider>
      <Box component="footer" sx={{ bgcolor: "#F6F6F6", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Poke Sandbox
          </Typography>

          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href={footerData.ghLink} target="_blank">
              {footerData.name}
            </Link>{" "}
            {new Date().getFullYear()}
          </Typography>
        </Container>
      </Box>
    </>
  )
}
