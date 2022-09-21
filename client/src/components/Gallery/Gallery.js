import React from "react";
import xinh1 from "../../assets/images/xinh3.jpg";
import "./style.css";

const Gallery = () => {
  return (
    <div className="container-fluid gallery">
      <div className="row">
        <div className="thumb-image">
          <img src={xinh1} className="img-resize mw-100" alt="a" />
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
