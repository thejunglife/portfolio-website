import React from 'react'
import './contact.css'

import { Form, Button, Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={5}>
            <h1>Contact</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime. Cupiditate quibusdam libero eum quasi possimus praesentium, nihil ad, aliquam, provident nam esse expedita ab sint? Expedita necessitatibus quis perferendis.
            </p>
          </Col>
          <Col sm={5}>
            <Form>
              <Form.Group
                as={Col}
                md="12"
                className="mb-3"
                controlId="formName"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control placeholder="Name" required />
              </Form.Group>
              <Form.Group
                as={Col}
                md="12"
                className="mb-3"
                controlId="formEmail"
              >
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group
                as={Col}
                md="12"
                className="mb-3"
                controlId="formMessage"
              >
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Message" />
              </Form.Group>
              <Button className="formBtn" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
