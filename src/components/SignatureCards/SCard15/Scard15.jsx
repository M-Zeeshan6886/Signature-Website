import React from "react";
import "./Scard15.scss";
import { Sc14logo } from "../../../assets";

const Scard15 = () => {
  return (
    <>
      <div className="sc15-container">
        <div className="sc15-container-content">
          <div className="sc15-container-content-two">
            <div className="sc15-container-content-two-middle">
              <p>Company Name</p>
              <p>www.Brand.org</p>
            </div>
            <div className="sc15-container-content-two-right">
              <p>000, 000, 0000</p>
              <p>777 S, Wilshire Blvd, Suite 212</p>
            </div>
            <div className="sc15-container-content-two-left">
              <img src={Sc14logo} alt="Logo" />
            </div>
          </div>
          <div className="sc15-container-content-one">
            <h1>Jane Doe</h1>
            <p>Golbal Operations Exective</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard15;
