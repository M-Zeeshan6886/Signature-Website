import React from "react";
import { SCard2be, SCard2insta, SCard2up } from "../../../assets";
import "./Scard2.scss";

const Scard2 = () => {
  return (
    <div className="scard2-container">
      <div className="scard2-container-content">
        <div className="scard2-container-content-left">
          <h2>Floyd Miles</h2>
          <hr />
          <p>Motion Designer</p>
          <p>Floyd.m@ds.com</p>
          <div className="scard2-container-content-left-icons">
            <img src={SCard2be} alt="cardIcons" />
            <img src={SCard2insta} alt="cardIcons" />
            <img src={SCard2up} alt="cardIcons" />
          </div>
        </div>
        <div className="scard2-container-content-right"></div>
      </div>
    </div>
  );
};

export default Scard2;
