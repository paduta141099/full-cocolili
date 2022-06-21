import React from "react";
import data from "../../data/data";
import "./style.css";
const Featured = () => {
  const [photo1, photo2, photo3] = data;
  return (
    <div className="container-lg p-4">
      <div className="row">
        <div className="col-md-4">
          <div className="featured-img">
            <img src={photo2.imgURL} className="img-responsive"></img>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featured-img">
            <img src={photo1.imgURL} className="img-responsive"></img>
          </div>
        </div>
        <div className="col-md-4">
          <div className="featured-img">
            <img src={photo3.imgURL} className="img-responsive"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
