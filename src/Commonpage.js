import React from "react";
import web from "../src/marketer_4-removebg-preview.png";
import webicon from "../src/icons8-commercial.gif";
import { NavLink } from "react-router-dom";

function Commonpage(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 mx auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} {<br />}
                    <strong className="brand-name" style={{ color: "#4a6694" }}>
                      {props.content1} <img src={props.icon} alt="" />
                    </strong>
                  </h1>
                  <h2 className="my-3">{props.homepagecontent}</h2>
                  <p>{props.aboutpagecontent}</p>
                  <div className="mt-3">
                    <NavLink
                      className="btn btn-outline-secondary"
                      to={props.visit}
                    >
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className={"img-fluid animated"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Commonpage;
