import React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import ImgOne from "../appBar/assets/imgo.jpg";
import ImgTwo from "../appBar/assets/imgtow.jpg";
import "../VisitOurShowroom/visit.css"

const visit = () => {
  return (
    <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "lighter", marginTop: "50px", fontFamily:"sans-serif", fontStretch:"ultra-condensed", fontSize:"36px" }}>Visit Our Showroom</h1>
        {/* <p style={{ fontWeight: "lighter", marginTop: "20px" }}>
          Do you have questions? Call, email or visit us for a no-obligation
          consultation in one of our showrooms.
        </p> */}
        <div
          className="con-card"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Card
            className="contact-card-one"
            style={{
              width: "48%",
              backgroundColor: "#f5f5f5",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "350px", overflow: "hidden" }}>
              <img
                src={ImgOne}
                alt="Contact"
                style={{
                  marginTop: "30px",
                  height: "90%",
                  width: "90%",
                  objectFit: "cover",
                }}
              />
            </div>
            <CardContent style={{ flex: "1" }}>
              <Typography variant="body2" color="textSecondary" component="p">
                <h3 className="yu">ALPHEN AAN DEN RIJN</h3>
                <p>Euromarkt 113</p>
                <p>Visit Us →</p>
                
              </Typography>
            </CardContent>
          </Card>
          <Card
            className="contact-card-two"
            style={{
              width: "48%",
              backgroundColor: "#f5f5f5",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ height: "350px", overflow: "hidden" }}>
              <img
                src={ImgTwo}
                alt="Contact"
                style={{
                  marginTop: "30px",
                  height: "90%",
                  width: "90%",
                  objectFit: "cover",
                }}
              />
            </div>
            <CardContent style={{ flex: "1" }}>
              <Typography variant="body2" color="textSecondary" component="p">
              <h3 className="yu">ALPHEN AAN DEN RIJN</h3>
                <p>Euromarkt 113</p>
                <p>Visit Us →</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

export default visit