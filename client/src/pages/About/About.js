import React from 'react'
import './about.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import aboutPic from '../../assets/images/aboutpic.jpg'

const About = () => {
  return (
    <section className="about" id="about">
        <Container className="aboutCont">
          <Row>
            <Col sm={1}></Col>
            <Col sm={5}>
              <div className="aboutMe">
                <h1>About Me</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis cumque necessitatibus velit, ducimus tenetur modi
                  fugiat rem eligendi tempore beatae, debitis eaque et! Modi,
                  non. Quos facilis voluptates molestias. Libero?
                </p>
              </div>
            </Col>
            <Col sm={5}>
              <div>
                <img className="aboutPic" src={aboutPic} alt="aboutPic" />
              </div>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>
    </section>
  )
}

export default About
