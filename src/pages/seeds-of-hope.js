import React from "react"
import Hero from "../components/hero"
import Layout from "../components/layout"
import ImageColumn from "../components/imageColumn"
import ProjectDetails from "../components/projectDetails"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"
import VideoEmbed from "../components/videoEmbed"

import sohOne from "../images/opt.gif"
import sohTwo from "../images/soh-2.jpg"
import sohThree from "../images/soh-3.jpg"

import sohFour from "../images/soh-four.jpg"
import sohFive from "../images/soh-five.jpg"

const details = [{
  text: "Agency Loma Linda University Health",
  key: 1
}, {
  text: "Creative Director Isabel Peruyera",
  key: 2,
  boldTwo: true
}, {
  text: "Art Director Jhanelle Ocampo",
  key: 3,
  boldTwo: true
}, {
  text: "Account Executive Janelle Ringer",
  key: 4,
  boldTwo: true
}]

const detailsSecond = [{
  text: "Role Visual Design",
  key: 1
}]

const secondProjectDetails = [{
  text: "Client Loma Linda University Medical Center",
  key: 1
}, {
  text: "Creative Director Isabel Peruyera",
  key: 2,
  boldTwo: true
}, {
  text: "Account Executive Janelle Ringer",
  key: 3,
  boldTwo: true
}]

const secondProjectDetailsRole = [{
  text: "Role Art Director, Graphic Design",
  key: 1
}]

const imageList = [{
  image: sohOne,
  key: "112",
  alt: "Seeds of hope mobile mockup",
}, {
  image: sohTwo,
  key: "212",
  alt: "Seeds of hope laptop mockup",
}, {
  image: sohThree,
  key: "312",
  alt: "Seeds of hope brochure"
}]

const secondImageList = [{
  image: sohFour,
  key: "412",
  alt: "Seeds of hope 2018 event image",
}, {
  image: sohFive,
  key: "512",
  alt: "Seeds of hope 2018 flyer",
}]


const next = {
  name: "Galway Spirits",
  path: "/galway"
}




export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seeds of Hope</title>
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
        <Hero location="soh"></Hero>
        <ProjectDetails
          heading="Seeds of Hope"
          subHeading="Event Graphic Design // Layout"
          paragraph="I had the privilege of working with Loma Linda University Behavioral Medicine Center’s annual Seeds of Hope event. Seeds of Hope focuses on the importance of mental health as a key factor in whole-person care."
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageColumn imageList={imageList}></ImageColumn>
        <ProjectDetails
          heading="Seeds of Hope 2018"
          subHeading="Event Graphic Design // Layout"
          paragraph="I had the privilege of working with Loma Linda University Behavioral Medicine Center’s annual Seeds of Hope event. Seeds of Hope focuses on the importance of mental health as a key factor in whole-person care."
          details={secondProjectDetails}
          detailsSecond={secondProjectDetailsRole}
        />
        <VideoEmbed url="https://player.vimeo.com/video/293637066"></VideoEmbed>
        <ImageColumn imageList={secondImageList}></ImageColumn>
        <ProjectNav next={next}></ProjectNav>
      </main>
    </Layout>
  )
}


