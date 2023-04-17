import React from "react";
import web from "../src/marketer_4-removebg-preview.png";
import webicon from "../src/icons8-commercial.gif";
import { NavLink } from "react-router-dom";
import Commonpage from "./Commonpage";

function Homepage() {
  return (
    <>
      <Commonpage
        name="Grow your Buisiness"
        imgsrc={web}
        visit="/service"
        btnname="Get Started"
        icon={webicon}
        content1="With Us"
        homepagecontent=" We are the team of talented digital marketers"
      />
    </>
  );
}

export default Homepage;
