import React from "react"
import Layout from "../components/layout"
import linkedin from "../images/linkedin-light.png"
import instagram from "../images/instagram-light.png"
import mail from "../images/mail-light.png"
import Form from "../components/form.js"
import { Helmet } from "react-helmet"
import logo from "../images/logo.png"

export default function () {
  return (
    <Layout dark={true}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hey 👋</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="Let's work together!" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Hey 👋" />
        <meta
          property="og:description"
          content="Have a question or want to work together?"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logo} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <div className="contact-jumbo-wrapper jumbotron jumbotron-fluid">
          <div className="contact-container container">
            <div className="row contact-row">
              <div className="col-sm-12 col-md-6 contact-col">
                <h1 className="contact-heading">Hey 👋</h1>
                <p className="contact-paragraph">
                  Want to grab a cup of chai virtually? Lets chat!
                </p>
                <img
                  className="contact-social"
                  src={linkedin}
                  data-sal="slide-up"
                  data-sal-duration="200"
                  alt="Linkedin Icon"
                ></img>
                <img
                  className="contact-social"
                  src={instagram}
                  data-sal="slide-up"
                  data-sal-duration="200"
                  data-sal-delay="100"
                  alt="Instagram Icon"
                ></img>
                <img
                  className="contact-social"
                  src={mail}
                  data-sal="slide-up"
                  data-sal-duration="200"
                  data-sal-delay="200"
                  alt="Email Icon"
                ></img>
              </div>
              <div className="col-sm-12 col-md-6">
                <Form></Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
