import React from "react";
import "./Patterns.css"

function Patterns(props) {
  return (
    <div className="patterns-container">
      <div className="patterns-heading">
        <h1>{props.patternHeading}</h1>
        <p>{props.patternHeadDes}</p>
      </div>
      <div className="patterns-cards">
        <div className="patterns-card-one">
          <div className="patterns-card-one-img">
            <img src={props.patternOneImage} alt="" />
          </div>
          <div className="patterns-card-one-des">
            <h2>{props.patternOneHead}</h2>
            <p>{props.patternOneDes}</p>
          </div>
        </div>
        <div className="patterns-card-two">
          
          <div className="patterns-card-two-des">
            <h2>{props.patternTwoHead}</h2>
            <p>{props.patternTwoDes}</p>
          </div>
          <div className="patterns-card-two-img">
            <img src={props.patternTwoImage} alt="" />
          </div>
        </div>
        <div className="patterns-card-three">
          <div className="patterns-card-three-img">
            <img src={props.patternThreeImage} alt="" />
          </div>
          <div className="patterns-card-three-des">
            <h2>{props.patternThreeHead}</h2>
            <p>{props.patternThreeDes}</p>
          </div>
        </div>
        <div className="patterns-card-four">
          
          <div className="patterns-card-four-des">
            <h2>{props.patternFourHead}</h2>
            <p>{props.patternFourDes}</p> 
          </div>
          <div className="patterns-card-four-img">
            <img src={props.patternFourImage} alt="" />
          </div>
        </div>
        <div className="patterns-card-five">
          <div className="patterns-card-five-img">
            <img src={props.patternFiveImage} alt="" />
          </div>
          <div className="patterns-card-five-des">
            <h2>{props.patternFiveHead}</h2>
            <p>{props.patternFiveDes}</p>
          </div>
        </div>
        <div className="patterns-card-six">
         
          <div className="patterns-card-six-des">
            <h2>{props.patternSixHead}</h2>
            <p>{props.patternSixDes}</p>
          </div>
          <div className="patterns-card-six-img">
            <img src={props.patternSixImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patterns;
