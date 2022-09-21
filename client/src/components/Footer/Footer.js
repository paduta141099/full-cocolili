import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid p-4 text-center">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">COCOLILI all rights reserved</div>
        <div className="col-md-4"></div>
      </div>
      <div className="row mt-3">
        <div className="text-center ">
          <a href="/facebook">facebook</a> | 
          <a href="/instagram"> instagram</a> |
          <a href="/tiktok"> tiktok</a> |
          <a href="/messenger"> messenger</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
