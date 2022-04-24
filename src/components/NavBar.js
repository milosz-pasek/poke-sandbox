import React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useNavigate } from "react-router-dom"
import { pages } from "../configs/navigationConfig"
import TextField from "@mui/material/TextField"
import SearchIcon from "@mui/icons-material/Search"
import { InputAdornment } from "@mui/material"

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [searchValue, setSearchValue] = React.useState("")

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleSearchSubmit = (e) => {
    if (searchValue) {
      e.preventDefault()
      navigate(`/pokemon/${searchValue.toLowerCase()}`)
      setSearchValue("")
    } else {
      e.preventDefault()
    }
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "#F6F6F6" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "text.secondary"
            }}
          >
            Poke Sandbox
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map(({ name, path }) => (
                <MenuItem key={name} onClick={() => navigate(path)}>
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", color: "text.secondary" }
            }}
          >
            Poke Sandbox
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, path }) => (
              <Button
                key={name}
                onClick={() => navigate(path)}
                sx={{ my: 2, color: "text.secondary", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box
            component="form"
            onSubmit={handleSearchSubmit}
            sx={{ display: "flex", blockSize: "min-content" }}
          >
            <TextField
              fullWidth
              id="standard-basic"
              label="Find Pokemon"
              placeholder="eg. 'Pikachu' or '25'"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              variant="standard"
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
