import React from 'react'
import './project.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'

import projectPic from '../../assets/images/aboutpic.jpg'

import {
  DiCss3,
  DiHtml5,
  DiJsBadge,
  DiNodejs,
  DiReact,
  DiMongodb,
} from 'react-icons/di'

const Project = () => {
  return (
    <section className="project" id="project">
      <Container className="projectPage">
        <Stack gap={4} className="col-md-10 mx-auto">
          <Row>
            <div>
              <h1>Technologies I Use</h1>
            </div>
          </Row>
          <Row>
            <Col xs={4} md={4} className="tech">
              <DiCss3 className="projectIcon" />
              <p className="iconText">CSS</p>
            </Col>
            <Col xs={4} md={4} className="tech">
              <DiHtml5 className="projectIcon" />
              <p>HTML</p>
            </Col>
            <Col xs={4} md={4} className="tech">
              <DiJsBadge className="projectIcon" />
              <p>JavaScript</p>
            </Col>
          </Row>
          <Row>
            <Col xs={4} md={4} className="tech">
              <DiNodejs className="projectIcon" />
              <p>NodeJS</p>
            </Col>
            <Col xs={4} md={4} className="tech">
              <DiReact className="projectIcon" />
              <p>React</p>
            </Col>
            <Col xs={4} md={4} className="tech">
              <DiMongodb className="projectIcon" />
              <p>MongoDB</p>
            </Col>
          </Row>
          <Row>
            <div>
              <h1>Projects</h1>
            </div>
          </Row>
          <Row>
            <Col xs={6} md={4} className="tech">
              <a href="/#project">
                <img src={projectPic} alt="" className="projectPic" />
              </a>
              <p>Project 1</p>
            </Col>
            <Col xs={6} md={4} className="tech">
              <a href="/#project">
                <img src={projectPic} alt="" className="projectPic" />
              </a>
              <p>Project 2</p>
            </Col>
            <Col xs={6} md={4} className="tech">
              <a href="/#project">
                <img src={projectPic} alt="" className="projectPic" />
              </a>
              <p>Project 3</p>
            </Col>
          </Row>
        </Stack>
      </Container>
    </section>
  )
}

export default Project
