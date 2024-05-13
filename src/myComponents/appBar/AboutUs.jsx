import React from "react";
import "../appBar/AboutUs.css";
import Footer from "../footer";
import aboutone from "../appBar/AboutAssests/aboutone.jpg";
import abouttwo from "../appBar/AboutAssests/abouttwo.jpg";
import aboutthree from "../appBar/AboutAssests/aboutthree.jpg";
import aboutfour from "../appBar/AboutAssests/aboutfour.jpeg";
import FAQ from "../FAQ";

function AboutUs() {
  return (
    <>
      <div className="about-sec">
        <div className="about">
          <h1>About us</h1>
          <p>
            Welcome to Visionary Partners based in UAE, your premier destination
            for high-quality PVC panels at wholesale prices. We have been a
            trusted supplier in the industry, serving businesses and clients
            with dedication and integrity.
          </p>
          <h1>Our Mission</h1>
          <p>
            At Visionary Partners, our mission is to provide superior PVC panels
            that meet the diverse needs of our clients while maintaining the
            highest standards of quality and customer satisfaction. We strive to
            be a reliable partner for businesses seeking durable,
            cost-effective, and aesthetically pleasing solutions for their
            projects.
          </p>
        </div>
        <div className="our-values">
          <div className="our-value-heading">
            <h1>Our Values</h1>
          </div>
          <div className="Integrity">
            <div className="Integrity-img">
              <img src={aboutone} alt="" />
            </div>
            <div className="Integrity-des">
              <h1>Integrity</h1>
              <p>
                We conduct our business with honesty, transparency, and
                fairness, fostering trust and long-term relationships with our
                clients and partners.
              </p>
            </div>
          </div>
          <div className="Quality">
            <div className="Quality-des">
              <h1>Quality</h1>
              <p>
                We are committed to delivering PVC panels of the finest quality,
                manufactured using advanced technologies and stringent quality
                control measures to ensure durability and performance.
              </p>
            </div>
            <div className="Quality-img">
              <img src={abouttwo} alt="" />
            </div>
          </div>
          <div className="Customer-Focus">
            <div className="Customer-Focus-img">
              <img src={aboutthree} alt="" />
            </div>
            <div className="Customer-Focus-des">
              <h1>Customer Focus</h1>
              <p>
                {" "}
                Our customers are at the heart of everything we do. We listen to
                their needs, offer personalized solutions, and provide
                exceptional service to exceed their expectations.
              </p>
            </div>
          </div>
          <div className="Innovation">
            <div className="Innovation-des">
              <h1>Innovation</h1>
              <p>
                We embrace innovation and continuously explore new technologies
                and techniques to enhance the design, functionality, and
                sustainability of our PVC panels, staying ahead of industry
                trends and customer demands.
              </p>
            </div>
            <div className="Innovation-img">
              <img src={aboutfour} alt="" />
            </div>
          </div> 
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}

export default AboutUs;