import React from 'react'

import About from '../About/About.js'
import Home from '../Home/Home.js'
import Project from '../Project/Project.js'
import Contact from '../Contact/Contact.js'
import ScrollSpy from 'react-ui-scrollspy'

const Main = () => {
  return (
    <React.Fragment>
      <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
        <Home />
        <About />
        <Project />
        <Contact />
      </ScrollSpy>
    </React.Fragment>
  )
}

export default Main
