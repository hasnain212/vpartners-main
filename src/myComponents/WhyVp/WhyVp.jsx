import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import {faHandFist} from "@fortawesome/free-solid-svg-icons"
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons"
import {faHouseFire} from "@fortawesome/free-solid-svg-icons"
import {faHeartPulse} from "@fortawesome/free-solid-svg-icons"
import "../WhyVp/WhyVp.css"
function Whyvp() {
  return (
    <div className="why-vp">
      <div className="why-vp-heading">
        <h1>Why Choose Visionary Partners?</h1>
      </div>
      <div className="why-vp-icons">
        <div className="durable">
          <FontAwesomeIcon icon={faHandFist} />
          <h6>Extensive Product Range </h6>
          <p>
            We offer a wide selection of PVC panels in various sizes, colors,
            and patterns to suit diverse applications, from residential to
            commercial projects.
          </p>
        </div>
        <div className="circular">
          <FontAwesomeIcon icon={faCircleNotch} />
          <h6>Competitive Pricing</h6>
          <p>
            {" "}
            As a wholesale supplier, we provide competitive pricing without
            compromising on quality, enabling our clients to maximize value for
            their investment.
          </p>
        </div>
        <div className="natural-heating">
          <FontAwesomeIcon icon={faHouseFire} />
          <h6>Expertise and Support</h6>
          <p>
            {" "}
            Our team of experienced professionals is dedicated to assisting
            clients throughout the purchasing process, from product selection to
            delivery, ensuring a seamless and hassle-free experience.
          </p>
        </div>
        <div className="health">
          <FontAwesomeIcon icon={faHeartPulse} />
          <h6>Sustainable Practices</h6>
          <p>
            We are committed to environmental responsibility and sustainable
            practices, sourcing materials ethically and minimizing waste in our
            manufacturing processes.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Whyvp
