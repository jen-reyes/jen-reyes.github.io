import React from "react"

const ProjectBody = ({ heading, paragraph, paragraphSecond, paragraphThird, subheading, listTitle, firstList, secondList, firstTitle, secondTitle, customClass = "" }) => {
  return (
    <div>
      <section className="container-fluid project-body-container" style={{ display: "flex", justifyContent: "center" }}>
        <div className="row" style={{ justifyContent: "space-around", maxWidth: "1440px" }}>
          <div className="col-sm-12 col-lg-5">
            <h1 style={{ backgroundImage: "linear-gradient(to top,#1d00f6 50%,transparent 50%)", display: "inline" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
              {heading}
            </h1>
            <p style={{ fontWeight: "300", paddingTop: "20px" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
              {paragraph}
            </p>
            {paragraphSecond ? <p style={{ fontWeight: "300" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">{paragraphSecond}</p> : null}
            {paragraphThird ? <p style={{ fontWeight: "300" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">{paragraphThird}</p> : null}
          </div>
          <div className={`col-sm-12 col-lg-3 project-details ${customClass}`} style={{ paddingLeft: "50px" }}>
            <h2 style={{ paddingTop: "10px" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
              {subheading}
            </h2>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", paddingTop: "20px" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
              {listTitle}
            </h3>
            {firstList &&
              <ul style={{ fontWeight: "300", lineHeight: "2rem", paddingTop: "8px" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
                {firstList[0] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="100">{firstList[0]}</li> : null}
                {firstList[1] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="150">{firstList[1]}</li> : null}
                {firstList[2] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="200">{firstList[2]}</li> : null}
                {firstList[3] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="250">{firstList[3]}</li> : null}
                {firstList[4] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="300">{firstList[4]}</li> : null}
                {firstList[5] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="350">{firstList[5]}</li> : null}
                {firstList[6] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="400">{firstList[6]}</li> : null}
                {firstList[7] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="450">{firstList[7]}</li> : null}
                {firstList[8] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="500">{firstList[8]}</li> : null}
                {firstList[9] ? <li data-sal="fade" data-sal-duration="200" data-sal-delay="550">{firstList[9]}</li> : null}
              </ul>
            }

            {!firstList &&
              <div style={{ paddingTop: "10px", lineHeight: "1.7rem", fontWeight: "300" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
                {secondList[0] ? <p data-sal="fade" data-sal-duration="200">{secondList[0]}</p> : null}
                {secondList[1] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="50">{secondList[1]}</p> : null}
                {secondList[2] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="100">{secondList[2]}</p> : null}
                {secondList[3] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="150">{secondList[3]}</p> : null}
                {secondList[4] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="250">{secondList[4]}</p> : null}
                {secondList[5] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="300">{secondList[5]}</p> : null}
                {secondList[6] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="350">{secondList[6]}</p> : null}
                {secondList[7] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="400">{secondList[7]}</p> : null}
                {secondList[8] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="450">{secondList[8]}</p> : null}
                {secondList[9] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="500">{secondList[9]}</p> : null}
              </div>
            }
          </div>

          {firstList &&
            <div className="col-sm-12 col-lg-3 project-team" style={{ paddingTop: "47px" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", paddingTop: "30px" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
                {secondTitle}
              </h3>
              <div style={{ paddingTop: "10px", lineHeight: "1.7rem", fontWeight: "300" }} data-sal="fade" data-sal-duration="400" data-sal-delay="200">
                {secondList[0] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="50">{secondList[0]}</p> : null}
                {secondList[1] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="100">{secondList[1]}</p> : null}
                {secondList[2] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="150">{secondList[2]}</p> : null}
                {secondList[3] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="250">{secondList[3]}</p> : null}
                {secondList[4] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="300">{secondList[4]}</p> : null}
                {secondList[5] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="350">{secondList[5]}</p> : null}
                {secondList[6] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="400">{secondList[6]}</p> : null}
                {secondList[7] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="450">{secondList[7]}</p> : null}
                {secondList[8] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="500">{secondList[8]}</p> : null}
                {secondList[9] ? <p data-sal="fade" data-sal-duration="200" data-sal-delay="550">{secondList[9]}</p> : null}
              </div>
            </div>
          }
        </div>
      </section>
    </div>
  )
}

export default ProjectBody