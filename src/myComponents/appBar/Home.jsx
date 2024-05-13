import React from "react";
import pimage from "../Catalogs/assets/PVCFloor.jpg";

import Footer from "../footer";
import FAQ from "../FAQ";
import AnnouncementBar from "../Annoucement-bar/AnnouncementBar";
import Catlog from "../Catalogs/Catlog";
import HotProducts from "../HotProducts/HotProducts";
import Whyvp from "../WhyVp/WhyVp";
import Visit from "../VisitOurShowroom/visit";
import Patterns from "../Patterns/Patterns";

const Home = () => {
  return (
    <div>
      <AnnouncementBar />
      <div className="conatiner" style={{ width: "80%", margin: "0px auto" }}>
        <Catlog />
        <HotProducts />
        <Whyvp />
        <Visit />
        <FAQ
          questionone="question one"
          questiontwo="question two"
          questionthree="question three"
          questionfour="question four"
          answerone="answer one"
          answertwo="answer two"
          answerthree="answer three "
          answerfour="answer four"
        />
        <Patterns
          patternHeading="CHEVRON PATTERN FLOORING PHOTOS"
          patternHeadDes="From sophisticated narrow planks to bold wide planks, Chevron pattern floors add timeless elegance and contemporary grandeur to any space.From sophisticated narrow planks to bold wide planks,In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating Chevron pattern floors add timeless elegance and contemporary grandeur to any space"
          patternOneImage={pimage}
          patternOneHead="HISTORIC BUILDING - NOBLE WHITE"
          patternOneDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating .In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating"
          patternTwoImage={pimage}
          patternTwoHead="HISTORIC BUILDING - NOBLE WHITE"
          patternTwoDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating."
          patternThreeImage={pimage}
          patternThreeHead="HISTORIC BUILDING - NOBLE WHITE"
          patternThreeDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
          patternFourImage={pimage}
          patternFourHead="HISTORIC BUILDING - NOBLE WHITE"
          patternFourDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heatingIn this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
          patternFiveImage={pimage}
          patternFiveHead="HISTORIC BUILDING - NOBLE WHITE"
          patternFiveDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating."
          patternSixImage={pimage}
          patternSixHead="HISTORIC BUILDING - NOBLE WHITE"
          patternSixDes="In this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heatingIn this partly modernized historic building the client opted for a spacious, modern chevron floor with underfloor heating ."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
