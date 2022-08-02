import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './pages/Main/Main.js'
import Games from './pages/Games/Games.js'

import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <Navbar />
          <Routes>
            <Route path="/games" element={<Games />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
