import React from "react";
import web from "../src/marketer_4-removebg-preview.png";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card" style={{ height: "600px" }}>
          <img
            className="card-img-top"
            src={props.imgsrc}
            alt="Card image cap"
            style={{ height: "360px" }}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <NavLink className="btn btn-outline-secondary" to="">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
