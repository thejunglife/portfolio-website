import React, { useState } from 'react'
import './home.css'
import DarkContext from '../../context/DarkContext.js'
import useDarkMode from '../../hooks/useDarkmode.js'

const Home = () => {
  const [isDark] = useState(false)
  console.log(isDark)
  return (
    <DarkContext.Provider value={isDark}>
      <section className={isDark ? 'homeDark' : 'home'} id="home">
        <div className="cloudContainer">
          <div className="cloud one"></div>
          <div className="cloud two"></div>
          <div className="cloud three"></div>
        </div>
        <div className="intro">
          <h1>Hello and welcome!</h1>
        </div>
      </section>
    </DarkContext.Provider>
  )
}

export default Home
