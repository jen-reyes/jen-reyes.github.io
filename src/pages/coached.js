import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import coachedOne from "../images/coached-1.png"
import coachedTwo from "../images/coached-2.jpg"
import coachedThree from "../images/coached-3.jpg"
import coachedFour from "../images/coached-4.png"
import coachedFive from "../images/coached-5.png"
import coachedSix from "../images/coached-6.png"

const details = [{
  text: "Agency Public Advertising Agency",
  key: 1
}, {
  text: "Graphic Design Madison Byrd",
  key: 2,
  boldTwo: true
}, {
  text: "Marketing Laura Yelnicker",
  key: 3,
}]

const detailsSecond = [{
  text: "Role Art Direction",
  key: 1
}]

const imageList = [{
  image: coachedOne,
  key: "112",
  alt: "coached project image",
  imagePadding: "project-image-padding"
}, {
  image: coachedTwo,
  key: "212",
  alt: "coached project image",
  imagePadding: "project-image-padding"
}, {
  image: coachedThree,
  key: "312",
  alt: "coached project image"
}, {
  image: coachedFour,
  key: "412",
  alt: "coached project image"
}, {
  image: coachedFive,
  key: "512",
  alt: "coached project image"
}, {
  image: coachedSix,
  key: "5122",
  alt: "coached project image"
}
]

const previous = {
  name: "Galway Spirits",
  path: "/galway"
}

const next = {
  name: "SOC",
  path: "/ontario-state-of-the-city"
}


export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coached</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <meta name="description" content="Coached is an online coaching community where members are empowered to learn to improve their health." />
        <meta name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics" />
        <meta property="og:title" content="Coached" />
        <meta property="og:description"
          content="Coached is an online coaching community where members are empowered to learn to improve their health." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"></link>
      </Helmet>
      <main>
        <Hero location="coached"></Hero>
        <ProjectDetails
          heading="Coached USA"
          subHeading="Brand Development // Website Design // Marketing Collateral // Social"
          paragraph="Coached is an online coaching community where members are empowered to learn to improve their health. You can join a live stream and exercise alongside other viewers as your coach guides you through the workout. You can also meet one-on-one for private coaching lessons from our certified personal trainers."
          paragraphSecond="A brand was developed to showcase a friendly and inviting environment for those starting on their personal training journey. Warm and inviting colors were used to showcase ease of use and excitement."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}