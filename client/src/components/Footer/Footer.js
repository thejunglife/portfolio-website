import React from 'react'
import './footer.css'
import Card from 'react-bootstrap/Card'

import { HashLink } from 'react-router-hash-link'
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowAltCircleUp,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <HashLink to="#top">
            <FaArrowAltCircleUp className="toTop" />
          </HashLink>
        </Card.Title>
        <Card.Text>
          <div className="social">
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub className="github" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaTwitter className="twitter" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="linkedin" />
            </a>
          </div>
          <div className="copyRight">
            <p>&copy;{new Date().getUTCFullYear()} Paul Jung</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Footer
