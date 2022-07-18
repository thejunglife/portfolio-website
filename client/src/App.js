import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home/Home.js'
import About from './pages/About/About.js'
import Contact from './pages/Contact/Contact.js'
import Project from './pages/Project/Project.js'

import Navbar from './components/Navbar/Navbar.js'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <Home />
            </React.Fragment>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <React.Fragment>
              <Navbar />
              <About />
            </React.Fragment>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Fragment>
              <Navbar />
              <Contact />
            </React.Fragment>
          }
        />
        <Route
          path="/project"
          element={
            <React.Fragment>
              <Navbar />
              <Project />
            </React.Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
