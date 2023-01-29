import React from "react"
import JumboTron from "../components/jumbotron.js"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import logo from "../images/logo.png"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Me</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="description"
          content="Hey I'm Jen, Polymath art director based in Southern California"
        />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Hey I'm Jen" />
        <meta
          property="og:description"
          content="Polymath Art Director based in Southern California"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
      </Helmet>
      <JumboTron />
      <section
        className="about-me-wrapper"
        data-sal="slide-up"
        data-sal-duration="400"
      >
        <div className="my-values-container container">
          <h2 className="about-body-h2">My Values.</h2>
          <div className="about-row row">
            <div className="col-sm-12 col-md-4">
              <h3 className="about-body-heading">To be clear is to be kind.</h3>
              <p
                style={{ color: "#000", paddingTop: "10px", fontWeight: "33" }}
              >
                Nobody can read your mind, amirite! 💁🏾‍♀️
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <h3 className="about-body-heading">
                Always do the right thing, especially when nobody is watching.
              </h3>
              <p
                style={{ color: "#000", paddingTop: "10px", fontWeight: "33" }}
              >
                Because, ya know, Karma 👀
              </p>
            </div>
            <div className="col-sm-12 col-md-4">
              <h3 className="about-body-heading">
                To be on time is to be late, always be early.
              </h3>
              <p
                style={{ color: "#000", paddingTop: "10px", fontWeight: "33" }}
              >
                I’d like to thank my 🏀 coach for this one.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
