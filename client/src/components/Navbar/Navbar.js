import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Switch from 'react-switch'
import useDarkMode from '../../context/ThemeContext.js'

const NavBar = () => {
  // darkMode switch
  const [isDark, setIsDark] = useDarkMode()

  //change nav color when scroll
  const [color, setColor] = useState(false)

  // navbar close when item is selected
  const [expanded, setExpanded] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 550) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  //offset custom scroll for HashLink
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }
  // react-switch checked code
  const [checked, setChecked] = useState(false)

  const handleChange = (nextChecked) => {
    setChecked(nextChecked)
    setIsDark(!isDark)
    setExpanded(false)
  }

  // handles two conditions for navcolor change
  const darkNav = () => {
    if (color && isDark) {
      return 'navbar-bg-dark'
    } else if (color && !isDark) {
      return 'navbar-bg'
    } else {
      return 'navbar'
    }
  }

  return (
    <div className="header">
      <Navbar
        expanded={expanded}
        className={darkNav()}
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand>{`<PJ>`}</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                data-to-scrollspy-id="home"
                as={HashLink}
                to="/#"
                scroll={scrollWithOffset}
                className="ms-auto"
                onClick={() => setExpanded(false)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="about"
                as={HashLink}
                to="/#about"
                scroll={scrollWithOffset}
                className="ms-auto"
                onClick={() => setExpanded(false)}
              >
                About
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="project"
                as={HashLink}
                to="/#project"
                scroll={scrollWithOffset}
                className="ms-auto"
                onClick={() => setExpanded(false)}
              >
                Project
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="contact"
                as={HashLink}
                to="/#contact"
                scroll={scrollWithOffset}
                className="ms-auto"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
              {/* <Nav.Link
                data-to-scrollspy-id="game"
                className="ms-auto"
                href="/games"
              >
                Games
              </Nav.Link> */}
              <Nav.Link className="ms-auto">
                <Switch
                  className="switch"
                  checked={checked}
                  onChange={handleChange}
                  onColor="#000000"
                  offColor="#3dacc9"
                  offHandleColor="#FDB813"
                  uncheckedIcon={<div>☁️</div>}
                  checkedIcon={<div>🌠</div>}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
