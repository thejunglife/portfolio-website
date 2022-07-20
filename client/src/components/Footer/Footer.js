import React from 'react'
import './footer.css'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Footer</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  )
}

export default Footer
