import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import ProjectDetails from "../components/projectDetails"
import ImageGrid from "../components/imageGrid"
import ProjectNav from "../components/projectNav"
import { Helmet } from "react-helmet"
import VideoEmbed from "../components/videoEmbed"
import ReactCarousel from "../components/carousel"

import socOne from "../images/COO-1.jpg"
import socTwo from "../images/COO-2.jpg"
import socThree from "../images/COO-3.jpg"
import socFour from "../images/COO-4.jpg"
import bannerImg from "../images/SOC-banner.png"

import imgOne from "../images/soc-2.gif"
import imgTwo from "../images/soc-3.jpg"
import imgThree from "../images/soc-4.jpg"

import imgFour from "../images/2018-1.jpg"
import imgFive from "../images/2018-2.jpg"
import imgSix from "../images/2018-3.jpg"

const gridImages = [
  {
    img: socOne,
    alt: "State of the city guy",
    key: "1",
  },
  {
    img: socTwo,
    alt: "State of the city room",
    key: "2",
  },
]

const gridImagesTwo = [
  {
    img: socThree,
    alt: "State of the city guy people sitting",
    key: "1",
  },
  {
    img: socFour,
    alt: "State of the city guy room of people",
    key: "2",
  },
]

const imageList = [
  {
    img: imgOne,
    alt: "State of the city image",
    key: "1",
  },
  {
    img: imgTwo,
    alt: "State of the city second slide image",
    key: "2",
  },
  {
    img: imgThree,
    alt: "State of the city third slide image",
    key: "3",
  },
]

const imageListTwo = [
  {
    img: imgFour,
    alt: "2018 state of the city first slide",
    key: "4",
  },
  {
    img: imgFive,
    alt: "2018 SOC second slide",
    key: "5",
  },
  {
    img: imgSix,
    alt: "2018 SOC third slide",
    key: "7",
  },
]

const banner = bannerImg

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
    text: "Account Executive Tanya Spiegel",
    key: 3,
    boldTwo: true,
  },
  {
    text: "Printing James Lithos",
    key: 4,
  },
  {
    text: "Video Windsong Productions",
    key: 5,
  },
]

const detailsSecond = [
  {
    text: "Role Art Direction",
    key: 1,
  },
]

const detailsSecondProject = [
  {
    text: "Gold - Horizon Interactive Awards - Integrated Branding Campaign",
    key: 1,
  },
]

const secondProjectList = [
  "Role // Art Direction, Design",
  "Visual Designers // Renier Van Der Westhuizen, Jan Sto. Domingo",
  "Account Executive // Tanya Spiegel",
  "Printing // James Lithos",
  "Video // Windsong Productions",
]

const previous = {
  name: "Coached",
  path: "/coached",
}

const next = {
  name: "Sam Maloof",
  path: "/sam-maloof",
}

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ontario State Of The City</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="Ontario State Of The City" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Ontario State Of The City" />
        <meta
          property="og:description"
          content="This annual event is attended by 1,000 representatives of business, development and the real estate community."
        />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Hero location="soc"></Hero>
        <ProjectDetails
          heading="Ontario State of the City"
          subHeading="Experience Design // Advertising // Marketing Collateral // Social"
          paragraph="The State of the City has become one of the Inland Empire’s biggest networking events. The SOC focuses on the city’s rapid business and residential growth as well as a new arts and culture initiative bringing together community leaders from throughout Ontario. The messaging of the events focus on the Mayor and City Council and how they continue to develop a financially stable, balanced community, focused on prosperity and economic opportunity."
          details={details}
          detailsSecond={detailsSecond}
        />
        <VideoEmbed url="https://www.youtube.com/embed/MV9rst2T2AE"></VideoEmbed>
        <ReactCarousel
          imageList={imageList}
          customClass="soc-carousel"
        ></ReactCarousel>
        <ImageGrid
          banner={banner}
          gridImages={gridImages}
          gridImagesTwo={gridImagesTwo}
        ></ImageGrid>
        <ProjectDetails
          heading="Leading the Way."
          subHeading="2018 Theme"
          paragraph="Leading The Way displays how the City of Ontario continues to be the center of it all while discussing topics on leadership, community, business, tourism, and infrastructure.  The 2018 event featured speaker was America’s First African American Female Combat Pilot, Vernice “FlyGirl” Armour."
          details={detailsSecondProject}
          detailsSecond={[]}
        />
        <VideoEmbed url="https://www.youtube.com/embed/GPWX9ftb1wU"></VideoEmbed>
        <ReactCarousel
          imageList={imageListTwo}
          customClass="soc-2018-carousel"
        ></ReactCarousel>
        <ProjectNav previous={previous} next={next}></ProjectNav>
      </main>
    </Layout>
  )
}
