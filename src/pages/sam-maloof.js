import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectDetails from "../components/projectDetails"
import Masonry from "../components/masonry"
import ImageColumn from "../components/imagecolumn"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"


import samOne from "../images/sam-1.jpg"
import samTwo from "../images/sam-2.jpg"
import samThree from "../images/sam-3.jpg"
import samFour from "../images/sam-4.jpg"
import samFive from "../images/sam-5.jpg"

import gridOne from "../images/sam-grid-1.jpg"
import gridTwo from "../images/sam-grid-2.jpg"
import gridThree from "../images/sam-grid-3.jpg"
import gridFour from "../images/sam-grid-4.jpg"
import gridFive from "../images/sam-grid-5.jpg"
import gridSix from "../images/sam-grid-6.jpg"
import gridSeven from "../images/sam-grid-7.jpg"
import gridEight from "../images/sam-grid-8.jpg"


const details = [{
  text: "Agency Public Advertising Agency",
  key: 1
}, {
  text: "Photographer Renier Van Der Westhuizen",
  key: 2
}, {
  text: "Account Executive Barbara Gonzales",
  key: 3,
  boldTwo: true
}]

const detailsSecond = [{
  text: "Role Art Direction, Design",
  key: 1
}]

const listImages = [{
  image: samOne,
  key: "11",
  alt: "Sam maloof project image"
}, {
  image: samTwo,
  key: "21",
  alt: "Sam maloof project image"
}, {
  image: samThree,
  key: "31",
  alt: "Sam maloof project image"
}, {
  image: samFour,
  key: "41",
  alt: "Sam maloof project image"
}, {
  image: samFive,
  key: "51",
  alt: "Sam maloof project image"
}
]

const gridImages = [{
  image: gridOne,
  key: "1",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridTwo,
  key: "2",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridThree,
  key: "3",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridFour,
  key: "4",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridFive,
  key: "5",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridSix,
  key: "6",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridSeven,
  key: "7",
  alt: "Sam Maloof woodworking image"
}, {
  image: gridEight,
  key: "8",
  alt: "Sam Maloof woodworking image"
}
]

const previous = {
  name: "SOC",
  path: "/ontario-state-of-the-city"
}

const next = {
  name: "Nieves",
  path: "/nieves-landscape"
}


export default function samMaloof() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sam Maloof</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <meta name="description" content="Sam Maloof" />
        <meta name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics" />
        <meta property="og:title" content="Sam Maloof" />
        <meta property="og:description"
          content="Shaping Wood, Shaping Artists presents a new perspective on the art and craft of master woodworker Sam Maloof." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"></link>
      </Helmet>
      <main>
        <Hero location="maloof"></Hero>
        <ProjectDetails
          heading="Shaping Wood. Shaping Artist. Sam Maloof."
          subHeading="Event Theme // Brand Development // Marketing Collateral"
          paragraph="Shaping Wood, Shaping Artists presents a new perspective on the art and craft of master woodworker Sam Maloof. Presented in two museums — the Ontario Museum of History & Art and the Chaffey Community Museum of Art — at one location — the Ontario Arts District, the exhibit tells the story of how Sam Maloof created his furniture (“Shaping Wood”) and how his generous spirit encouraged the careers of so many local artists (“Shaping Artists”). Presented in collaboration with the Sam and Alfreda Maloof Foundation for Arts and Crafts."
          details={details}
          detailsSecond={detailsSecond}
        />
        <Masonry gridImages={gridImages}></Masonry>
        <ImageColumn imageList={listImages}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}

