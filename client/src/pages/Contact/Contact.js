import React, { useState } from 'react'
import axios from 'axios'
import './contact.css'

import { Form, Button, Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
  const [contactState, setContactState] = useState({
    name: '',
    email: '',
    message: '',
  })
//
  contactState.handleInputChange = (e) => {
    setContactState({
      ...contactState,
      [e.target.name]: e.target.value,
    })
  }
//will send contact to backend for nodemailer
  contactState.sendContact = async (e) => {
    e.preventDefault()
    try {
      let response = await axios({
        method: 'post',
        url: '/contact',
        data: {
          name: contactState.name,
          email: contactState.email,
          message: contactState.message,
        },
      })
      let result = await response

      //clears form after message sent
      if (result.data.msg === 'success') {
        alert('message sent')
        setContactState({ ...contactState, name: '', email: '', message: '' })
      } else if (result.data.msg === 'fail') {
        alert('message failed to send')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={5}>
            <h1>Contact</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
              maxime. Cupiditate quibusdam libero eum quasi possimus
              praesentium, nihil ad, aliquam, provident nam esse expedita ab
              sint? Expedita necessitatibus quis perferendis.
            </p>
          </Col>
          <Col sm={5}>
            <Form>
              <Form.Group as={Col} md="12" className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  name="name"
                  placeholder="Name"
                  value={contactState.name}
                  onChange={contactState.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3" controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={contactState.email}
                  onChange={contactState.handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="12" className="mb-3" controlId="message">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                  value={contactState.message}
                  onChange={contactState.handleInputChange}
                />
              </Form.Group>
              <Button
                className="formBtn"
                type="submit"
                onClick={contactState.sendContact}
              >
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
