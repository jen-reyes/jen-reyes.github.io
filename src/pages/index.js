import React from "react"
import { Helmet } from "react-helmet"

import ProjectWrapper from "../components/projectWrapper"
import Layout from "../components/layout"
import Row from "../components/row.js"
import ProjectCard from "../components/projectCard.js"

import galway from "../images/galway.gif"
import coached from "../images/coached.png"
import ontarioAir from "../images/ont.jpg"
import maloof from "../images/maloof.jpg"
import smoky from "../images/smoky.jpg"
import soc from "../images/soc.gif"
import nieves from "../images/nieves-4.gif"
import soh from "../images/soh-tile.gif"
import tuwu from "../images/tuwu-tile.png"
import logo from "../images/logo.png"
import ocvb from "../images/GOCVB-Billboard-Outdoor-Advertising-Mockup-opt.jpg"
import lomaLinda from "../images/ll-one.jpg"
import puma from "../images/Puma.gif"

const projectHeadings = {
  galway: "Galway Spirits",
  coached: "Coached",
  ont: "Ontario International Airport",
  ontstate: "Ontario State of the City",
  shaping: "Sam Maloof",
  smoky: "Smokey Mountain Catering",
  nieves: "Nieves Landscape Inc.",
  soh: "Seeds of Hope 2017",
  tuwu: "Trabajadores Unidos Workers United",
  ocvb: "OCVB",
  lomaLinda: "Loma Linda University",
  puma: "Puma",
}

const projectImages = {
  gal: galway,
  coached: coached,
  ont: ontarioAir,
  soc,
  maloof: maloof,
  smoky: smoky,
  nieves,
  soh,
  tuwu,
  ocvb,
  lomaLinda,
  puma,
}

const domain = "https://www.jenreyes.design/"

export default function Home() {
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta charSet="utf-8" />
        <title>Jennifer Reyes</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta
          name="description"
          content="Hey, I'm Jennifer Reyes. An Art Director with a passion for purposeful design."
        />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta
          property="og:title"
          content="Jennifer Reyes // Art Director // Designer"
        />
        <meta
          property="og:description"
          content="Hey, I'm Jennifer Reyes. An Art Director with a passion for purposeful design."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"/og-image/og-image.png"} />
        <meta property="og:url" content={"https://www.jenreyes.design/"} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main className="home-wrapper">
        <ProjectWrapper>
          <Row>
            <ProjectCard
              title={projectHeadings.soh}
              image={projectImages.soh}
              link="seeds-of-hope"
              animation={"300"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.galway}
              image={projectImages.gal}
              link="galway"
              animation={"0"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.coached}
              image={projectImages.coached}
              link="coached"
              animation={"100"}
            ></ProjectCard>
          </Row>
        </ProjectWrapper>

        <ProjectWrapper>
          <Row>
            <ProjectCard
              title={projectHeadings.ontstate}
              image={projectImages.soc}
              link="ontario-state-of-the-city"
              animation={"300"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.shaping}
              image={projectImages.maloof}
              link="sam-maloof"
              animation={"400"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.nieves}
              image={projectImages.nieves}
              link="nieves-landscape"
              animation={"500"}
            ></ProjectCard>
          </Row>
        </ProjectWrapper>

        <ProjectWrapper>
          <Row>
            <ProjectCard
              title={projectHeadings.ont}
              image={projectImages.ont}
              link="ontario-international-airport"
              animation={"200"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.tuwu}
              image={projectImages.tuwu}
              link="tuwu"
              animation={"200"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.ocvb}
              image={projectImages.ocvb}
              link="ocvb"
              animation={"200"}
            ></ProjectCard>
          </Row>
        </ProjectWrapper>

        <ProjectWrapper>
          <Row>
            <ProjectCard
              title={projectHeadings.lomaLinda}
              image={projectImages.lomaLinda}
              link="loma-linda-university"
              animation={"200"}
            ></ProjectCard>
            <ProjectCard
              title={projectHeadings.puma}
              image={projectImages.puma}
              link="puma"
              animation={"200"}
            ></ProjectCard>
          </Row>
        </ProjectWrapper>
      </main>
    </Layout>
  )
}
