import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import ocvbOne from "../images/ocvb-one.jpeg"
import ocvbTwo from "../images/ocvb-two.jpg"
import ocvbThree from "../images/ocvb-three.jpg"

const details = [
  {
    text: "Agency Winter Advertising Agency",
    key: 1,
  },
  {
    text: "Account Executive Mary Winter",
    key: 2,
    boldTwo: true,
  },
  {
    text: "Photography Louis Wiener",
    key: 3,
  },
]

const detailsSecond = [
  {
    text: "Role Art direction, Graphic Design, Research",
    key: 1,
  },
]

const imageList = [
  {
    image: ocvbOne,
    key: "112",
    alt: "ocvb project image",
  },
  {
    image: ocvbTwo,
    key: "212",
    alt: "ocvb project image",
  },
  {
    image: ocvbThree,
    key: "312",
    alt: "ocvb project image",
  },
]

const previous = {
  name: "TUWU",
  path: "/tuwu",
}

const next = {
  name: "LLUH",
  path: "/loma-linda-university",
}

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>OCVB</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="description"
          content="Ontario Convention And Visitors Bureau"
        />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="OCVB" />
        <meta
          property="og:description"
          content="Ontario Convention And Visitors Bureau"
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="ocvb"></Hero>
        <ProjectDetails
          heading="Ontario Convention & Visitors Bureau"
          subHeading="Brand Development // Rebranding // Advertising Campaigns // Marketing Collateral"
          paragraph="The Greater Ontario Convention & Visitors Bureau is the official destination marketing organization for the cities of Ontario and Rancho Cucamonga, California to visitors nationally and internationally. Our approach was focused on bringing a clean and cohesive look that could tie the city, airport, and the convention together."
          paragraphSecond="Campaigns were developed as part of an extensive brand positioning effort. The rebrand efforts included marketing assessments based on the region’s strengths and image in the travel, tourism, meeting and convention industries. There was a 75% growth in brand awareness at the end of the campaign."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
