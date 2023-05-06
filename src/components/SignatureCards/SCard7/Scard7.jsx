import React from "react";
import { Sc7profile, SCard2be, SCard2insta, SCard2up } from "../../../assets";
import "./Scard7.scss";

const Scard7 = () => {
  return (
    <div className="scard7-container">
      <div className="scard7-container-content">
        <div className="scard7-container-content-left">
          <img src={Sc7profile} alt="ProfileImg" />
        </div>
        <div className="scard7-container-content-right">
          <h1>Paige Loewe</h1>
          <hr />
          <p>Motion Designer</p>
          <p>Floyd.m@ds.com</p>
          <div className="scard7-container-content-right-icons">
            <img src={SCard2be} alt="Icons" />
            <img src={SCard2insta} alt="Icons" />
            <img src={SCard2up} alt="Icons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard7;
