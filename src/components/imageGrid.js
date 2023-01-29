import React from "react"

const ImageGrid = ({ gridImages, banner, gridImagesTwo }) => {
  return (
    <div>
      <div className="project-flex">
        <div className="project-column">
          {gridImages.map(image => {
            return (
              <img
                className="project-grid-item"
                key={image.key}
                src={image.img}
                alt={image.alt}
                data-sal="fade"
                data-sal-duration="300"
                data-sal-delay="100"
              ></img>
            )
          })}
        </div>
        <div className="project-column">
          {gridImagesTwo.map(image => {
            return (
              <img
                className="project-grid-item"
                key={image.key}
                src={image.img}
                alt={image.alt}
                data-sal="fade"
                data-sal-duration="300"
                data-sal-delay="100"
              ></img>
            )
          })}
        </div>
      </div>
      <img className="project-banner" src={banner} alt="project banner"></img>
    </div>
  )
}

export default ImageGrid
