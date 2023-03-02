import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Footer />
    </Router>
  )
}

export default App
