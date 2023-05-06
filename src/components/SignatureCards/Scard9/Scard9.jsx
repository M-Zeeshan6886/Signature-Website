import React from "react";
import "./Scard9.scss";
import {
  Sc8profile,
  Sc9Icon1,
  Sc9Icon2,
  Sc9Icon3,
  Sc9Icon4,
} from "../../../assets";

const Scard9 = () => {
  return (
    <>
      <div className="scard9-container">
        <div className="scard9-container-content">
          <div className="scard9-container-content-left">
            <img src={Sc8profile} alt="ProfileIcons" />
          </div>
          <div className="scard9-container-content-middle">
            <h1>Peter Grecko</h1>
            <p>Digital Product Designer</p>
            <p>He/Him</p>
          </div>
          <div className="scard9-container-content-right">
            <div className="scard9-container-content-right-icons">
              <img src={Sc9Icon1} alt="Icons" />
              <img src={Sc9Icon2} alt="Icons" />
              <img src={Sc9Icon3} alt="Icons" />
              <img src={Sc9Icon4} alt="Icons" />
            </div>
            <p>000 000 0000</p>
            <p>Company Name</p>
            <p>www.website.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard9;
