import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ReactCarousel = ({
  infiniteLoop,
  centerMode,
  imageList,
  customClass = "",
  showThumbs = false,
  showStatus = false,
  showIndicators = false,
}) => {
  return (
    <div className={`container ${customClass}`}>
      <div className="row" style={{ margin: "0", padding: "0" }}>
        <div className="col-12" style={{ margin: "0", padding: "0" }}>
          <Carousel
            centerMode={(centerMode = false)}
            infiniteLoop={(infiniteLoop = true)}
            useKeyboardArrows
            autoPlay
            showStatus={false}
            showThumbs={showThumbs}
            showStatus={showStatus}
            showIndicators={showIndicators}
          >
            {imageList.map(image => {
              return (
                <div key={image.key}>
                  <img src={image.img} alt={image.alt}></img>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default ReactCarousel
