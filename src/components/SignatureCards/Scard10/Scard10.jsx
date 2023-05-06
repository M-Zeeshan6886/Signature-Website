import React from "react";
import "./Scard10.scss";
import { Sc10Icon1, Sc10Icon2, Sc10Icon3, Sc10Icon4, Sc8profile } from "../../../assets";

const Scard10 = () => {
  return (
    <>
      <div className="sc10-container">
        <div className="sc10-container-content">
          <div className="sc10-container-content-first">
            <img src={Sc8profile} alt="Profile" />
            <h1>Gregory Fridley</h1>
          </div>
          <div className="sc10-container-content-second">
            <p>Global Operations Executive | Comapny Name</p>
            <div className="sc10-container-content-second-icons">
                <img src={Sc10Icon1} alt="Icons" />
                <img src={Sc10Icon2} alt="Icons" />
                <img src={Sc10Icon3} alt="Icons" />
                <img src={Sc10Icon4} alt="Icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard10;
