import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"

import nievesOne from "../images/nieves-1.jpg"
import nievesTwo from "../images/nieves-2.jpg"
import nievesThree from "../images/nieves-3.jpg"
import nievesFour from "../images/nieves-4.gif"

const details = [{
  text: "Agency Nomadic Design Co.",
  key: 1
}, {
  text: "Web Developer Tony Batts",
  key: 2,
  boldTwo: true
}, {
  text: "Coprywriter Sandy Nieves",
  key: 3,
}]

const detailsSecond = [{
  text: "Role Art Director, Web Design",
  key: 1
}]

const firstList = [
  "Brand Development",
  "Website Design",
  "Marketing Collateral",
  "Apparel Design"
]

const secondList = [
  "Role: Art Direction // Copyrighting",
  "Web Developer // Tony Batts"
]

const imageList = [{
  image: nievesOne,
  key: "112",
  alt: "Nieves Landscaping Logo",
  imagePaddingExtra: ".project-image-padding__extra"
}, {
  image: nievesTwo,
  key: "212",
  alt: "Nieves Landscaping Mood Board",
}, {
  image: nievesThree,
  key: "312",
  alt: "Nieves Landscaping Branding"
}, {
  image: nievesFour,
  key: "412",
  alt: "Nieves Landscape Website"
}]

const previous = {
  name: "Sam Maloof",
  path: "/sam-maloof"
}

const next = {
  name: "ONT",
  path: "/ontario-international-airport"
}



export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nieves Landscape</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <meta name="description" content="Nieves Landscape is a multi-million dollar landscaping company based in Southern California" />
        <meta name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics" />
        <meta property="og:title" content="Jennifer Reyes - Nieves Landscape" />
        <meta property="og:description"
          content="Nieves Landscape is a multi-million dollar landscaping company based in Southern California" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"></link>
      </Helmet>
      <main>
        <Hero location="nieves"></Hero>
        <ProjectDetails
          heading="Nieves Landscape Inc."
          subHeading="Brand Development // Website Design // Marketing Collateral"
          paragraph="Nieves Landscape, Inc. has been a full-service company servicing the Southern California area since 1985. With the rise of its impact in the region, a rebrand was needed to position this staple in a competitive manner. "
          paragraphSecond="The rebrand and marketing efforts brought about a 77% brand awareness increase. The new website had a higher conversion rate and the SEO rankings increased search engine visibility."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}