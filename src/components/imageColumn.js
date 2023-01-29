import React from "react"

const ImageColumn = ({ imageList }) => {
  let imageWidth = ""

  return (
    <div className="full-width-image-container">
      {imageList.map((image) => {
        if (image.imagePadding) {
          imageWidth = "flex-images project-image-padding"
        } else if (image.imagePaddingExtra) {
          imageWidth = "project-image-padding__extra"
        } else if (image.imagePaddingAround) {
          imageWidth = "project-image-padding-around"
        } else {
          imageWidth = "flex-images"
        }
        return (
          <img key={image.key} className={imageWidth} src={image.image} alt={image.alt} data-sal="slide-up" data-sal-duration="200"></img>
        )
      })}
    </div>
  )
}

export default ImageColumn