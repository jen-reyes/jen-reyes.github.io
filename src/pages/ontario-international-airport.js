import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"
import ReactCarousel from "../components/carousel"

import ProjectBody from "../components/projectBody.js"
import ProjectDetails from "../components/projectDetails"
import ImageColumn from "../components/imageColumn"
import ontOne from "../images/stateofcity.png"
import ontTwo from "../images/ont-2.jpg"
import ontThree from "../images/Brand-Guide-Mockup.jpg"
import ontCarOne from "../images/ont-carousel-1.jpg"
import ontCarTwo from "../images/ont-carousel-2.jpg"
import ontCarThree from "../images/ont-carousel-3.jpg"

const imagesList = [
  {
    image: ontOne,
    key: "1123",
    alt: "Ontario Interational Airport Project Image",
  },
  {
    image: ontTwo,
    key: "2123",
    alt: "Ontario Interational Airport Project Image",
  },
  {
    image: ontThree,
    key: "3123",
    alt: "Ontario Interational Airport Project Image",
  },
]

const carouselImages = [
  {
    img: ontCarOne,
    alt: "ONT mockup first",
    key: "1",
  },
  {
    img: ontCarTwo,
    alt: "ONT mockup second",
    key: "2",
  },
  {
    img: ontCarThree,
    alt: "ONT mockup three",
    key: "3",
  },
]

const details = [
  {
    text: "Agency Public Advertising Agency",
    key: 1,
  },
  {
    text: "Visual Designers Renier Van Der Westhuizen, Jan Sto. Domingo",
    key: 2,
    boldTwo: true,
  },
  {
    text: "Copywriter Edith Miranda",
    key: 3,
  },
]

const detailsSecond = [
  {
    text: "Role Art Direction, Content Creation",
    key: 1,
  },
]

const previous = {
  name: "Nieves",
  path: "/nieves-landscape",
}

const next = {
  name: "TUWU",
  path: "/tuwu",
}

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ontario International Airport</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="Ontario International Airport" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Ontario International Airport" />
        <meta
          property="og:description"
          content="The ONT Tenant Signage Standards were designed to promote a well-integrated, complete signage program that will help the public use the airport efficiently and with minimum confusion. "
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="airport"></Hero>
        <ProjectDetails
          heading="Ontario International Airport"
          subHeading="Graphic Design"
          paragraph="Our team was tasked to support the airport with various visual pieces. Our focus began with the creation of brand and signage standards. Later, miscellaneous collateral was created to promote the airport through paid partnership, out of home media, digital and print advertising,"
          details={details}
          detailsSecond={detailsSecond}
        />
        <ReactCarousel
          imageList={carouselImages}
          customClass="ont-carousel"
        ></ReactCarousel>
        <ImageColumn imageList={imagesList}></ImageColumn>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
