import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectDetails from "../components/projectDetails"
import ImageGrid from "../components/ImageGrid.js"
import ProjectNav from "../components/projectNav"
import ReactCarousel from "../components/carousel"
import { Helmet } from "react-helmet"

import galwayOne from "../images/galway-1.png"
import galwayTwo from "../images/galway-2.png"
import galwayThree from "../images/galway-3.png"
import galwayFour from "../images/galway-4.jpg"
import galwayFive from "../images/galway-5.jpg"
import galwayGif from "../images/galway-gif.gif"
import galgrid from "../images/banner.png"

import galOne from "../images/galway-slide-1.jpg"
import galTwo from "../images/galway-slide-2.jpg"
import galThree from "../images/galway-slide-3.jpg"

import bourbon from "../images/galway-bourbon.jpg"
import coffee from "../images/galway-coffee.jpg"
import dragon from "../images/galway-dragon.jpg"
import gin from "../images/galway-gin.jpg"
import mango from "../images/galway-mango.jpg"
import orange from "../images/galway-orange.jpg"
import rye from "../images/galway-rye.jpg"
import vodka from "../images/galway-vodka.jpg"

const firstList = [
  "District 15 Silver - American Advertising Federation - Package Design",
  "Gold - American Advertising Federation Inland Empire - Branding Campaign",
  "Silver - American Advertising Federation Inland Empire - Logo Design",
  "Best in Category - Horizon Interactive - Branding Campaign",
]
const secondList = [
  "Role // Creative Direction, Web Design, Packaging",
  "Graphic Design // Joe Escalante",
  "Photography // Jimmy Fu",
  "3D Rendering // Jan Sto. Domingo",
]

const details = [
  {
    text: "Agency Winter Advertising Agency",
    key: 1,
  },
  {
    text: "Graphic Design Joe Escalante",
    key: 2,
    boldTwo: true,
  },
  {
    text: "Photography Jimmy Fu",
    key: 3,
  },
  {
    text: "3D Rendering Jan Sto. Domingo",
    key: 4,
    boldTwo: true,
  },
]

const detailsSecond = [
  {
    text: "Role Art Direction, Web Design, Packaging",
    key: 1,
  },
]

const imageList = [
  {
    img: bourbon,
    alt: "Galway Bourbon",
    key: 1,
  },
  {
    img: coffee,
    alt: "Galway coffee flavor",
    key: 12,
  },
  {
    img: dragon,
    alt: "Galway Dragon fruit",
    key: 13,
  },
  {
    img: gin,
    alt: "Galway Gin",
    key: 14,
  },
  {
    img: mango,
    alt: "Galway Mango flavor",
    key: 15,
  },
  {
    img: orange,
    alt: "Galway Orange flavor",
    key: 16,
  },
  {
    img: rye,
    alt: "Galway Rye",
    key: 17,
  },
  {
    img: vodka,
    alt: "Galway Vodka",
    key: 18,
  },
]

const secondImageList = [
  {
    img: galOne,
    alt: "Galway Spirits first slide",
    key: "1",
  },
  {
    img: galTwo,
    alt: "Galway Spirits second slide",
    key: "2",
  },
  {
    img: galThree,
    alt: "Glaway Spirits third slide",
    key: "3",
  },
]

const gridImages = [
  {
    img: galwayOne,
    alt: "Guy pouring a drink",
    key: "1",
  },
  {
    img: galwayTwo,
    alt: "Family and friends",
    key: "2",
  },
  {
    img: galwayThree,
    alt: "Galway Spirits Bar",
    key: "3",
  },
]

const gridImagesTwo = [
  {
    img: galwayFour,
    alt: "Galway Spirits crew outside",
    key: "3",
  },
  {
    img: galwayFive,
    alt: "Galway Spirits brewing alcohol",
    key: "4",
  },
]

const banner = galgrid

const previous = {
  name: "Seeds of Hope",
  path: "/seeds-of-hope",
}

const next = {
  name: "Coached",
  path: "/coached",
}

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Galway Spirits</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="Galway Spirits" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Galway Spirits" />
        <meta
          property="og:description"
          content="In 2010, Ken Smith was surveying his newly-acquired property, Galway Downs when a most fortunate inspiration struck him."
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="galway"></Hero>
        <ProjectDetails
          heading="Galway Spirits Distillery"
          subHeading="Branding // Package Design // Social Media // Website Design"
          paragraph="In 2010, Ken Smith was surveying his newly-acquired property, Galway Downs when a most fortunate inspiration struck him. The spirit of this uniquely enthralling place could be channeled into literal spirits by way of a distillery — and right then Galway Spirits was born. We were tasked to carry out a long-standing tradition of strong bonds, family, nature, life and truth. "
          details={details}
          detailsSecond={detailsSecond}
        />
        <ImageGrid
          banner={banner}
          gridImages={gridImages}
          gridImagesTwo={gridImagesTwo}
        ></ImageGrid>
        <div style={{ backGroundColor: "#fff" }}>
          <img
            className="galway-bottle"
            src={galwayGif}
            data-sal="zoom-in"
            data-sal-duration="400"
            data-sal-delay="200"
            alt="Galway bottle"
          ></img>
        </div>
        <ReactCarousel
          customClass="carousel-custom-container"
          centerMode={true}
          imageList={imageList}
        ></ReactCarousel>
        <ReactCarousel
          customClass="container-carousel-normal"
          imageList={secondImageList}
        ></ReactCarousel>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
