import React from "react"

import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Gallery from "../components/Gallery"

import one from "../images/sketches/Day_7.jpg"
import two from "../images/sketches/Day_11.jpg"
import three from "../images/sketches/Day_12.jpg"
import four from "../images/sketches/Day_13.jpg"
import five from "../images/sketches/Day_16.jpg"
import six from "../images/sketches/Day_17.jpg"
import seven from "../images/sketches/Day_18.jpg"
import eight from "../images/sketches/Day_26.jpg"
import nine from "../images/sketches/Day_28.jpg"
import ten from "../images/sketches/Day_31.jpg"

import eleven from "../images/sketches/Day_34.jpg"
import twelve from "../images/sketches/Day_37.gif"
import thirteen from "../images/sketches/Day_39.gif"
import fourteen from "../images/sketches/Day_42.gif"
import fifteen from "../images/sketches/Day_52.gif"

import sixteen from "../images/sketches/Day_55.gif"
import seventeen from "../images/sketches/Day_59.gif"
import eighteen from "../images/sketches/Untitled_Artwork.gif"
import nineteen from "../images/sketches/67.jpg"

const imageList = [
  {
    image: thirteen,
    key: "51221111111",
    alt: "Sketch 13",
    fit: "bottom",
  },
  {
    image: fifteen,
    key: "5122111111111",
    alt: "Sketch 15",
  },
  {
    image: eighteen,
    key: "5122111111111111111111",
    alt: "Sketch 18",
  },
  {
    image: nineteen,
    key: "51221111111111111111111",
    alt: "Sketch 19",
  },
  {
    image: one,
    key: "112",
    alt: "Sketch 1",
    imagePadding: "project-image-padding",
  },
  {
    image: two,
    key: "212",
    alt: "Sketch 2",
    imagePadding: "project-image-padding",
  },
  {
    image: three,
    key: "312",
    alt: "Sketch 3",
    objectFit: "contain",
  },
  {
    image: four,
    key: "412",
    alt: "Sketch 4",
  },
  {
    image: five,
    key: "512",
    alt: "Sketch 5",
  },
  {
    image: six,
    key: "5122",
    alt: "Sketch 6",
  },
  {
    image: seven,
    key: "51221",
    alt: "Sketch 7",
  },
  {
    image: eight,
    key: "512211",
    alt: "Sketch 8",
  },
  {
    image: nine,
    key: "5122111",
    alt: "Sketch 9",
  },
  {
    image: ten,
    key: "51221111",
    alt: "Sketch 10",
  },
  {
    image: eleven,
    key: "512211111",
    alt: "Sketch 11",
  },
  {
    image: twelve,
    key: "5122111111",
    alt: "Sketch 12",
  },

  {
    image: fourteen,
    key: "512211111111",
    alt: "Sketch 14",
  },

  {
    image: sixteen,
    key: "51221111111111",
    alt: "Sketch 16",
  },
  {
    image: seventeen,
    key: "512211111111111111111",
    alt: "Sketch 17",
  },
]

export default function (props) {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doodles</title>
        <meta name="author" content="Jennifer Reyes"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        ></meta>
        <meta name="description" content="My doodles" />
        <meta
          name="keywords"
          content="Jennifer, Reyes, Jennifer Reyes, Graphic Designer, Art Director, Creative Director, Adventurer, Designer, Design, Graphics"
        />
        <meta property="og:title" content="Doodles" />
        <meta property="og:description" content="My doodles" />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✌️</text></svg>"
        ></link>
      </Helmet>
      <main>
        <Gallery imageList={imageList} />
      </main>
    </Layout>
  )
}
