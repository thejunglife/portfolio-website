import React from 'react'
import './home.css'

import useDarkMode from '../../context/ThemeContext.js'


const Home = () => {
  // to help change image
  const [isDark] = useDarkMode()
  
  return (
    
      <section className={isDark ? 'homeDark' : 'home' } id="home">
        <div className="cloudContainer">
          <div className="cloud one"></div>
          <div className="cloud two"></div>
          <div className="cloud three"></div>
        </div>
        <div className="intro">
          <h1>Hello and welcome!</h1>
        </div>
      </section>
   
  )
}

export default Home
