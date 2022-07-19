import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Games from './pages/Games/Games.js'
import Main from './pages/Main/Main.js'

import Navbar from './components/Navbar/Navbar.js'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
