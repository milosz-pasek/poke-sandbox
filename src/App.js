import React from "react"
import MainPage from "./pages/MainPage"
import About from "./pages/About"
import { Footer, NavBar, PokeInfo } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/pokelist/:page" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/:id" element={<PokeInfo />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
