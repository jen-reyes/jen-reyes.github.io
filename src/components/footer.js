import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <div className="footer-nav-item">
          <Link className="bottom-nav" activeClassName="active" to="/">
            Work
          </Link>
        </div>
        <div className="footer-nav-item">
          <Link className="bottom-nav" activeClassName="active" to="/about">
            About
          </Link>
        </div>
        <div className="footer-nav-item">
          <Link className="bottom-nav" activeClassName="active" to="/doodles">
            Doodles
          </Link>
        </div>
        <div className="footer-nav-item">
          <Link className="bottom-nav" activeClassName="active" to="/contact">
            Contact
          </Link>
        </div>
      </div>

      <div className="social-wrapper">
        <a
          href="https://www.linkedin.com/in/jrforthemind/"
          aria-label="Linkedin Link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="social-icon-bottom" alt="Linkedin icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </a>
        <a
          href="https://www.instagram.com/wander.jen/"
          aria-label="Instagram Link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="social-icon-bottom" alt="Instagram Icon">
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </a>
        <a href="mailto: info@jenniferreyesstudios.com" aria-label="Mail Link">
          <span className="social-icon-bottom" alt="email icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
