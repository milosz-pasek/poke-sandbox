import React from "react"
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from "@mui/material"

export const PokeCard = ({ pokeData }) => {
  return (
    <Card key={pokeData.name} sx={{ minWidth: 300, maxwidth: 345, m: 1 }}>
      <CardActionArea>
        <CardMedia
          sx={{ objectFit: "scale-down", imageRendering: "pixelated" }}
          component="img"
          height="145"
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`}
          alt={pokeData.name}
        />
        <CardContent sx={{ bgcolor: "#F6F6F6" }}>
          <Typography gutterBottom variant="h5" component="div">
            {pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {pokeData.id.toString().padStart(3, "0")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
