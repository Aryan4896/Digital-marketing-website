import React from "react";
import web from "../src/about.jpg";
import Commonpage from "./Commonpage";

function About() {
  return (
    <>
      <Commonpage
        name=" Welcome to our"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
        aboutpagecontent="With years of experience in the industry, we understand the importance of digital marketing in today's ever-evolving digital landscape. Our team is committed to staying up-to-date with the latest trends and techniques to help our clients stay ahead of the competition.

      We specialize in a variety of digital marketing services, including search engine optimization (SEO), search engine marketing (SEM), social media marketing, content marketing, email marketing, and more. We work closely with our clients to develop customized strategies that fit their unique needs and goals.
      
      At our core, we are driven by a passion for helping businesses succeed. We take pride in seeing our clients grow and achieve their business objectives through our digital marketing services. Our team is dedicated to providing exceptional service and delivering results that exceed our clients' expectations.
      
      Thank you for considering our digital marketing services. We look forward to working with you to take your business to the next level. Contact us today to learn more about how we can help you succeed online."
        content1="About Page"
      />
    </>
  );
}

export default About;
