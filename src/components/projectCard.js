import React from "react"
import { navigate } from "gatsby"

const ProjectCard = props => {
  return (
    <div
      className="project-card col-sm-12 col-md-4"
      data-sal="slide-up"
      data-sal-duration="500"
    >
      <div
        onClick={() => {
          navigate(props.link)
        }}
        className="project-overlay"
      ></div>
      <div
        className="project-image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="project-text">
        <h3 className="project-title">{props.title}</h3>
      </div>
    </div>
  )
}

export default ProjectCard
