import React from "react"
import { useState } from "react"

const LightBox = ({ img, display, setLightBoxState }) => {
  const closeLightBox = e => {
    setLightBoxState("none")
  }

  return (
    <div
      style={{ display }}
      className="lightbox-overlay"
      onClick={closeLightBox}
    >
      <div className="lightbox-img-wrapper">
        <img
          src={img}
          alt="lightbox"
          className="lightbox-img"
          onClick={closeLightBox}
        />
      </div>
    </div>
  )
}

export default LightBox
