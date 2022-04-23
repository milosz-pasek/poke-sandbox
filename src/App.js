import React from "react"
import MainPage from "./pages/MainPage"
import About from "./pages/About"
import { Footer, NavBar, PokeInfo } from "./components"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"

const App = () => {
  return (
    <CssBaseline>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/pokelist/1" />} />
          <Route path="/pokelist/:page" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:id" element={<PokeInfo />} />
        </Routes>
      </Router>
      <Footer />
    </CssBaseline>
  )
}

export default App
