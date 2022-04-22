import React from "react"
import MainPage from "./pages/MainPage"
import About from "./pages/About"
import { Footer, NavBar } from "./components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/pokelist/:id" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
