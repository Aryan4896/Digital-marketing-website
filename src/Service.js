import React from "react";
import Data from "./Data";
import Card from "./Card";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row gy-5">
              {Data.map((value, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={value.imgsrc}
                    title={value.title}
                    content={value.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
