import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className="home" id="home">
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
