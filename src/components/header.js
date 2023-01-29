import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container custom-nav-container">
          <Link className="navbar-brand" to="/">
            <img
              className="logo"
              style={{ height: "95px", width: "176.5px" }}
              src={logo}
              alt="Logo"
            ></img>
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-center">
              <Link
                className="nav-item nav-link"
                activeClassName="active"
                to="/"
              >
                Work <span className="sr-only">(current)</span>
              </Link>
              <Link
                className="nav-item nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </Link>
              <Link
                className="nav-item nav-link"
                activeClassName="active"
                to="/doodles"
              >
                Doodles
              </Link>
              <Link
                className="nav-item nav-link"
                activeClassName="active"
                to="/contact"
              >
                Contact
              </Link>
            </div>
            <div className="social" style={{ height: "20px" }}>
              <a
                href="https://www.linkedin.com/in/jrforthemind/"
                aria-label="Linkedin Link"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  style={{ color: "#000", fontSize: "20px", height: "20px" }}
                  className="social-icon linkedin"
                  alt="Linkedin icon"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </span>
              </a>
              <a
                href="https://www.instagram.com/wander.jen/"
                aria-label="Instagram Link"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="social-icon"
                  style={{ fontSize: "20px", height: "20px" }}
                  alt="Instagram Icon"
                >
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </span>
              </a>
              <a
                href="mailto: info@jenniferreyesstudios.com"
                aria-label="Mail Link"
              >
                <span
                  className="social-icon"
                  style={{ fontSize: "20px", height: "20px" }}
                  alt="email icon"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="1x" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
