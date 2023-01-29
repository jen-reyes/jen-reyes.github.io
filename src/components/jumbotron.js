import React from "react"
import { useState } from "react"
import jennifer from "../images/jennifer.gif"
import { naruto } from "naruto-name-generator"

const JumboTron = () => {
  const [name, setName] = useState("Jen.")
  const [nameColor, setNameColor] = useState("")

  const easterEgg = () => {
    setName(naruto.random().name)
    setNameColor("naruto-color")
  }

  return (
    <div className="about-jumbo-wrapper jumbotron jumbotron-fluid">
      <div className="about-container container-fluid">
        <div className="row jennifer-row">
          <div className="col-sm-12 col-md-6 jennifer-col">
            <img
              className="jennifer"
              src={jennifer}
              alt="Jennifer gif"
              onClick={easterEgg}
              data-sal="fade"
              data-sal-duration="400"
            ></img>
          </div>
          <div className="about-blurb col-sm-12 col-md-6">
            <h1
              className="about-heading"
              data-sal="slide-up"
              data-sal-duration="400"
            >
              Hey! I'm <span className={nameColor}>{name}</span>
            </h1>
            <strong>
              <h2
                className="about-subheading"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="100"
              >
                Polymath art director.
              </h2>
            </strong>
            <h2
              className="about-subheading-light"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              Based in Southern California.
            </h2>
            <h2
              className="about-subheading"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="300"
            >
              I’m fascinated by the connections that bring us together.
            </h2>
            <h2
              className="about-subheading-light"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              Love working with mission-driven organizations.
            </h2>
            <h2
              className="about-subheading"
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="500"
            >
              I reject the idea of designing for decoration.
            </h2>
            <marquee>
              👋 My given name is Jennifer Reyes. 📚 I take design classes at
              night to keep my mind young ⛰️ I've hiked the highest mountain
              peaks in Southern California 🌮 I once drove 3 hours for tacos 🤘
              Going to music shows is my jam 📃 The smell of freshly printed
              paper makes me happy. 🥖 Baking is my newest hobby ⛺ Sleeping in
              the forest clears my mind.
            </marquee>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JumboTron
