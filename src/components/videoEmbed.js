import React from "react"

const VideoEmbed = ({ url }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 video-embed ratio ratio-16x9">
          <iframe
            className="embed-responsive-item"
            src={url}
            width="640"
            height="360"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoEmbed
