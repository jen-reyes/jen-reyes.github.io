import React from "react"
import LightBox from "../components/lightbox"
import { useState } from "react"

const Gallery = ({ imageList }) => {
  const [lightBoxImage, setLightBoxImage] = useState("")
  const [lightBoxState, setLightBoxState] = useState("none")

  const handleLightBox = e => {
    setLightBoxImage(e.target.src)
    setLightBoxState("block")
  }

  return (
    <div className="grid-wrapper">
      <LightBox
        display={lightBoxState}
        setLightBoxState={setLightBoxState}
        img={lightBoxImage}
      />
      {imageList.map(image => {
        const objectStyle = image.objectFit ? image.objectFit : "cover"
        const objectFit = image.fit ? image.fit : "center"

        const imageStyle = {
          objectFit: objectStyle,
          objectPosition: objectFit,
        }

        return (
          <img
            key={image.key}
            className="grid-image"
            style={imageStyle}
            src={image.image}
            alt={image.alt}
            data-sal="slide-up"
            data-sal-duration="200"
            onClick={handleLightBox}
          ></img>
        )
      })}
    </div>
  )
}

export default Gallery
