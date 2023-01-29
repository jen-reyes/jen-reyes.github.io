import React from "react"

const Masonry = ({ gridImages }) => {
  return (
    <div id="masonry-with-columns" className="masonry-with-columns">
      {gridImages.map((image) => {
        return (
          <img style={{ objectFit: "cover" }} key={image.key} src={image.image} alt={image.alt} data-sal="slide-up" data-sal-duration="400" data-sal-delay="100"></img>
        )
      })}
    </div>
  )
}

export default Masonry