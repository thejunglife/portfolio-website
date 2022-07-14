import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import About from './pages/About/About.js'
import Contact from './pages/Contact/Contact.js'
import Project from './pages/Project/Project.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
