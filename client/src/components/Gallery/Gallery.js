import React, { useState } from "react";
import thumb from "../../data/thumb";
import "./style.css";

const Gallery = () => {
  const [firstThumb, secondThumb] = thumb;
  return (
    <div className="container-fluid gallery">
      <div className="row">
        <div className="thumb-image">
          <img src={secondThumb.imgURL} className="img-responsive img-resize" />
          <div className="thumb-image__text">
            <p className="text-white fs-1 fw-bold">COCOLILI</p>
            <h5 className="text-white fw-normal">BASE IN CAN THO CITY</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
