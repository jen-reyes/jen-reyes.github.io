import React from "react"

const ProjectDetails = ({
  heading,
  subHeading,
  paragraph,
  paragraphSecond,
  paragraphThird,
  paragraphFourth,
  details,
  detailsSecond,
  customClass = "",
}) => {
  const bold = sentance => sentance.split(" ")[0]
  const normal = sentance => {
    const array = sentance.split(" ")
    array.shift()
    return array.join(" ")
  }

  const boldTwo = sentance => {
    const arr = sentance.split(" ")
    const boldWords = arr.slice(0, 2)
    return boldWords.join(" ")
  }

  const boldTwoSentance = sentance => {
    const arr = sentance.split(" ")
    arr.shift()
    arr.shift()
    return arr.join(" ")
  }

  return (
    <div>
      <section
        className="container-fluid project-body-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="row"
          style={{ justifyContent: "space-around", maxWidth: "1440px" }}
        >
          <div
            className="project-heading"
            style={{ marginRight: "auto", width: "100%" }}
          >
            <h1
              style={{
                backgroundImage:
                  "linear-gradient(to top,#1d00f6 50%,transparent 50%)",
                marginRight: "auto",
                display: "inline",
              }}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              {heading}
            </h1>
            <p
              className="project-subheading"
              style={{ fontWeight: "300" }}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              <em>{subHeading}</em>
            </p>
          </div>

          <div className="col-sm-12 col-lg-6">
            <p
              style={{ fontWeight: "300", paddingTop: "20px" }}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              {paragraph}
            </p>
            {paragraphSecond ? (
              <p
                style={{ fontWeight: "300" }}
                data-sal="fade"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                {paragraphSecond}
              </p>
            ) : null}
            {paragraphThird ? (
              <p
                style={{ fontWeight: "300" }}
                data-sal="fade"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                {paragraphThird}
              </p>
            ) : null}
            {paragraphFourth ? (
              <p
                style={{ fontWeight: "300" }}
                data-sal="fade"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                {paragraphFourth}
              </p>
            ) : null}
          </div>

          <div
            className={`col-sm-12 col-lg-6 project-details ${customClass}`}
            style={{ paddingLeft: "50px" }}
          >
            <div
              style={{ fontWeight: "300", paddingTop: "20px" }}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              {details.map(item => {
                return (
                  <p
                    style={{ marginBottom: "0px" }}
                    data-sal="fade"
                    data-sal-duration="200"
                    key={item.key}
                  >
                    <strong
                      style={{ fontFamily: "Poppins", fontSize: ".85rem" }}
                    >
                      {item.boldTwo ? boldTwo(item.text) : bold(item.text)}
                    </strong>{" "}
                    <span style={{ fontSize: ".85rem" }}>
                      {item.boldTwo
                        ? boldTwoSentance(item.text)
                        : normal(item.text)}
                    </span>
                  </p>
                )
              })}
            </div>
            <div
              style={{
                paddingTop: "10px",
                lineHeight: "1.7rem",
                fontWeight: "300",
              }}
              data-sal="fade"
              data-sal-duration="400"
              data-sal-delay="200"
            >
              {detailsSecond &&
                detailsSecond.map(item => {
                  return (
                    <p data-sal="fade" data-sal-duration="200" key={item.key}>
                      <strong
                        style={{ fontFamily: "Poppins", fontSize: ".85rem" }}
                      >
                        {bold(item.text)}
                      </strong>{" "}
                      <span style={{ fontSize: ".85rem" }}>
                        {normal(item.text)}
                      </span>
                    </p>
                  )
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetails
