import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import pumaOne from "../images/puma-1.jpg"
import pumaTwo from "../images/Puma-2-Mockup.jpg"
import pumaThree from "../images/Puma-3-Mockup.jpg"
import pumaFour from "../images/Puma-Manifesto.jpg"

const details = [
  {
    text: "Agency ArtCenter College of Design",
    key: 1,
  },
  {
    text: "Client Puma - Spec Work",
    key: 2,
  },
  {
    text: "Supervisory Director Zohrab Gevorkian",
    key: 3,
    boldTwo: true,
  },
]

const detailsSecond = [
  {
    text: "Role Creative Direction",
    key: 1,
  },
]

const imageList = [
  {
    image: pumaFour,
    key: "312",
    alt: "puma project image",
  },
  {
    image: pumaOne,
    key: "112",
    alt: "puma project image",
  },

  {
    image: pumaThree,
    key: "212",
    alt: "puma project image",
  },
  {
    image: pumaTwo,
    key: "412",
    alt: "puma project image",
    imagePaddingAround: true,
  },
]

const previous = {
  name: "LLU",
  path: "/loma-linda-university",
}

// const next = {
//   name: "SOC",
//   path: "/ontario-state-of-the-city",
// }

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Puma</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="Puma" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Puma" />
        <meta property="og:description" content="Puma" />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="puma"></Hero>
        <ProjectDetails
          heading="Puma"
          subHeading="Creative Direction"
          paragraph="Puma is dedicated to women and our authenticity can be seen through our efforts. Our tagline, “where the gym meets the runway,” shows our understanding and dedication in showcasing strong female empowerment. "
          paragraphSecond="This campaign was created to showcase strength isn't only physical. Be the best version of yourself and stay true to who you are while acknowledging everyone's individual struggles."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous}></ProjectNav>
      </main>
    </Layout>
  )
}
