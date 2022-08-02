import React from 'react'
import './project.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

const Project = () => {
  return (
    <section className="project" id="project">
      <Container className="projectPage">
        <Stack gap={5} className="col-md-10 mx-auto">
          <Row>
            <h1>Technology I Use</h1>
            <h1>Technology I Use</h1>
            <h1>Technology I Use</h1>
            <h1>Technology I Use</h1>
          </Row>
          <Row>
            <Col sm={1}></Col>
            <Col sm={5}>
              <h1>Projects</h1>
            </Col>
            <Col sm={5}>
              <h1>Grid of Projects</h1>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Stack>
      </Container>
    </section>
  )
}

export default Project
