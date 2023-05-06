import React from "react";
import "./Scard14.scss";
import { Sc14logo } from "../../../assets";

const Scard14 = () => {
  return (
    <>
      <div className="sc14-container">
        <div className="sc14-container-content">
          <div className="sc14-container-content-one">
            <h1>Jane Doe</h1>
            <p>Golbal Operations Exective</p>
          </div>
          <div className="sc14-container-content-two">
            <div className="sc14-container-content-two-left">
              <img src={Sc14logo} alt="Logo" />
            </div>
            <div className="sc14-container-content-two-middle">
              <p>Company Name</p>
              <p>www.Brand.org</p>
            </div>
            <div className="sc14-container-content-two-right">
              <p>000, 000, 0000</p>
              <p>777 S, Wilshire Blvd, Suite 212</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard14;
