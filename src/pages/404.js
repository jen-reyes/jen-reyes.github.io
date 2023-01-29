import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function () {
  return (
    <Layout dark={true}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Oops! 👋</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <meta name="description" content="Let's work together!" />
        <meta name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics" />
        <meta property="og:title" content="Hey 👋" />
        <meta property="og:description"
          content="Have a question or want to work together?" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"></link>
      </Helmet>
      <main>
        <div className="contact-jumbo-wrapper jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-12" style={{ textAlign: "center" }}>
                <h1 className="contact-heading">404!?!</h1>
                <h3 className="contact-paragraph">Well that's embarrasing 😳</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

