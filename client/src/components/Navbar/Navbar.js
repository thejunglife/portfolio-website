import React from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {
  return (
    <Navbar sticky="top" bg="gray" expand="lg">
      <Container>
        <Navbar.Brand
          href="/"
          to="home"
          spy={true}
          smooth={true}
          offset={-120}
          duration={500}
        >
          Paul Jung
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/about"
              as={Link}
              to="about"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="ms-auto"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="project"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="ms-auto"
            >
              Project
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="contact"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
              className="ms-auto"
            >
              Contact
            </Nav.Link>
            <Nav.Link className="ms-auto" href="/games">
              Games
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
