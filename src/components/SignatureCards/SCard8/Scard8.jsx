import React from "react";
import "./Scard8.scss";
import {
  Sc8Icon1,
  Sc8Icon2,
  Sc8Icon3,
  Sc8Icon4,
  Sc8profile,
} from "../../../assets";

const Scard8 = () => {
  return (
    <>
      <div className="scard8-container">
        <div className="scard8-container-content">
          <div className="scard8-container-content-left">
            <img src={Sc8profile} alt="ProfileIcons" />
          </div>
          <div className="scard8-container-content-middle">
            <h1>Alex Rust</h1>
            <p>Digital Product Designer</p>
            <p>He/Him</p>
          </div>
          <div className="scard8-container-content-right">
            <p>000 000 0000</p>
            <p>Company Name</p>
            <p>www.website.com</p>
            <div className="scard8-container-content-right-icons">
              <img src={Sc8Icon1} alt="Icons" />
              <img src={Sc8Icon2} alt="Icons" />
              <img src={Sc8Icon3} alt="Icons" />
              <img src={Sc8Icon4} alt="Icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard8;
