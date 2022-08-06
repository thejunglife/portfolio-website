import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  //change nav color when scroll
  const [color, setColor] = useState(false)
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

  return (
    <div className="header">
      <Navbar
        className={color ? 'navbar-bg' : 'navbar'}
        sticky="top"
        expand="lg"
      >
        <Container>
          <Navbar.Brand>{`<PJ>`}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                data-to-scrollspy-id="home"
                as={HashLink}
                to="/#"
                scroll={scrollWithOffset}
                className="ms-auto"
              >
                Home
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="about"
                as={HashLink}
                to="/#about"
                scroll={scrollWithOffset}
                className="ms-auto"
              >
                About
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="project"
                as={HashLink}
                to="/#project"
                scroll={scrollWithOffset}
                className="ms-auto"
              >
                Project
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="contact"
                as={HashLink}
                to="/#contact"
                scroll={scrollWithOffset}
                className="ms-auto"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                data-to-scrollspy-id="game"
                className="ms-auto"
                href="/games"
              >
                Games
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
