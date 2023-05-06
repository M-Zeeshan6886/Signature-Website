import React from "react";
import {
  FC1icon,
  LC1icon,
  MC1icon,
  SC1icon,
  Scard1Img,
  YC1icon,
} from "../../../assets";
import "./Scard1.scss";

const Scard1 = () => {
  return (
    <div className="scard1-container">
      <div className="scard1-container-content1"></div>
      <div className="scard1-container-content2">
        <img src={Scard1Img} alt="CardImges" />
        <div className="scard1-container-content2-data">
          <div className="scard1-container-content2-data-content">
            <h5>Emmie Paterson</h5>
            <p>Sale & Marketing</p>
            <div className="scard1-container-content2-data-content-email">
              <h5>Email</h5>
              <p>emmie@gamil.com</p>
            </div>
            <div className="scard1-container-content2-data-content-phone">
              <h5>phone</h5>
              <p>+030 3232233</p>
            </div>
            <div className="scard1-container-content2-data-content-address">
              <h5>Address</h5>
              <p>32 3rd Ave, New York, NY 10002, USA</p>
            </div>
            <div className="scard1-container-content2-data-content-visit">
              <h5>Visit My Website</h5>
              <p>Here</p>
            </div>
            <div className="scard1-container-content2-data-content-subscribe">
              <h5>Subscribe to my</h5>
              <p>channel</p>
            </div>
            <div className="scard1-container-content2-data-content-icons">
              <img src={LC1icon} alt="Icons" />
              <img src={FC1icon} alt="Icons" />
              <img src={SC1icon} alt="Icons" />
              <img src={MC1icon} alt="Icons" />
              <img src={YC1icon} alt="Icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="scard1-container-content3"></div>
    </div>
  );
};

export default Scard1;
