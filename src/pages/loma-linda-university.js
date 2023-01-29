import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import llOne from "../images/ll-first.jpg"
import llTwo from "../images/ll-second.jpg"
import llThree from "../images/ll-third.jpg"
import llFour from "../images/ll-fourth.jpg"
import llFive from "../images/ll-five.jpg"

const details = [
  {
    text: "Agency Loma Linda University Health",
    key: 1,
  },
  {
    text: "Creative Director Isabel Peruyera",
    key: 2,
    boldTwo: true,
  },
  {
    text: "Account Executive Misc",
    key: 3,
    boldTwo: true,
  },
]

const detailsSecond = [
  {
    text: "Role Art Direction, Graphic Design",
    key: 1,
  },
]

const imageList = [
  {
    image: llOne,
    key: "112",
    alt: "loma linda university project image",
  },
  {
    image: llFour,
    key: "412",
    alt: "loma linda university project image",
  },
  {
    image: llTwo,
    key: "212",
    alt: "loma linda university project image",
  },
  {
    image: llThree,
    key: "312",
    alt: "loma linda university project image",
  },
  {
    image: llFive,
    key: "512",
    alt: "loma linda university project image",
  },
]

const previous = {
  name: "OCVB",
  path: "/ocvb",
}

const next = {
  name: "Puma",
  path: "/puma",
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
        <Hero location="loma"></Hero>
        <ProjectDetails
          heading="Loma Linda University Health"
          subHeading="Campaign Creative // Environmental Graphics // Social Media Marketing"
          paragraph="Many Strength. One Mission."
          paragraphSecond="Loma Linda University Health unites the strengths of healthcare, education and research to deliver world-class care. I worked alongside the in-house design agency to create several campaigns to enhance their efforts."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
