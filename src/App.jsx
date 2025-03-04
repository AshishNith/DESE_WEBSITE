import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'
import FloatingShape from './components/FloatingShape'
import Footer from './components/Footer'
import GoldenJubilee from './pages/GoldenJubilee'
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <FloatingShape />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/GoldenJubilee" element={<GoldenJubilee />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App