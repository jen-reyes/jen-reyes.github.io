import React from "react"
import { Link } from "gatsby"

import leftIcon from "../images/left.png"
import rightIcon from "../images/right.png"


const ProjectNav = ({ previous = null, next = null }) => {
  return (
    <div className="container-fluid project-nav-container">
      <div className="row project-nav-row">
        <div className="col-6 previous-wrapper">
          {!previous ? null : <Link className="btn previous-button" to={previous.path}><img src={leftIcon} alt="left icon" ></img>{previous.name}</Link>}
        </div>
        <div className="col-6 next-wrapper">
          {!next ? null : <Link className="btn next-button" to={next.path}>{next.name}<img src={rightIcon} alt="right icon"></img></Link>}
        </div>
      </div>
    </div>
  )
}

export default ProjectNav

