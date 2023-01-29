import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import tuwuOne from "../images/tuwu-1.jpg"
import tuwuTwo from "../images/tuwu-2.jpg"

const details = [
  {
    text: "Agency Pro-Bono",
    key: 1,
  },
  {
    text: "Communication Lucia Lin",
    key: 2,
  },
  {
    text: "Surveying Estefania Ramirez, Carina Gavino",
    key: 3,
  },
]

const detailsSecond = [
  {
    text: "Role Art Director, Design",
    key: 1,
  },
]

const imageList = [
  {
    image: tuwuOne,
    key: "112",
    alt: "Tuwu stats",
    imagePaddingAround: "project-image-padding-around",
  },
  {
    image: tuwuTwo,
    key: "212",
    alt: "Tuwu brocure",
  },
]

const previous = {
  name: "ONT",
  path: "/ontario-international-airport",
}

const next = {
  name: "OCVB",
  path: "/ocvb",
}

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tuwu</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="description"
          content="I was honored to work with Trabajadores Unidos Workers United (TUWU) pro bono on their 2020 Covid Impact report. "
        />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Tuwu" />
        <meta
          property="og:description"
          content="I was honored to work with Trabajadores Unidos Workers United (TUWU) pro bono on their 2020 Covid Impact report. "
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="tuwu"></Hero>
        <ProjectDetails
          heading="Trabajadores Unidos Workers United"
          subHeading="Graphic Design"
          paragraph="I was honored to work with Trabajadores Unidos Workers United (TUWU) pro bono on their 2020 Covid Impact report. The organization is a grassroots 501 (c) 3 group focusing on raising the standards of low-wage workers in the San Francisco area."
          paragraphSecond="Over the summer of 2020, TUWU surveyed 295 immigrant workers who work or live in San Francisco, the majority of whom were restaurant and domestic workers, about their issues during the pandemic. This report reflects those findings."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
