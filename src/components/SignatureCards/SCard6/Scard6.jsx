import React from "react";
import { Sc6E, Sc6F, Sc6L, Sc6loc, Sc6P, Sc6profile, Sc6web, Sc6Y, Sc6Y2 } from "../../../assets";
import "./Scard6.scss";

const Scard6 = () => {
  return (
    <div className="scard6-container">
      <div className="scard6-container-content">
        <div className="scard6-container-content-left">
          <img src={Sc6profile} alt="profile" />
          <div className="scard6-container-content-left-icons">
            <img src={Sc6Y} alt="Icons" />
            <img src={Sc6L} alt="Icons" />
            <img src={Sc6F} alt="Icons" />
          </div>
        </div>
        <div className="scard6-container-content-right">
          <h1>Emmie Peterson</h1>
          <p>Sales & Marketing</p>
          <hr />
          <div className="scard6-container-content-right-cdata">
            <div className="scard6-container-content-right-cdata-email">
              <img src={Sc6E} alt="Icons" />
              <p>emmie@gamil.com</p>
            </div>
            <div className="scard6-container-content-right-cdata-phone">
              <img src={Sc6P} alt="Icons" />
              <p>+030 323 2233</p>
            </div>
            <div className="scard6-container-content-right-cdata-web">
              <img src={Sc6web} alt="Icons" />
              <p>mywebsite.com</p>
            </div>
            <div className="scard6-container-content-right-cdata-loc">
              <img src={Sc6loc} alt="Icons" />
              <p>32 3rd Ave, New York, NY 10002, USA</p>
            </div>
          </div>
          <div className="scard6-container-content-right-channal">
            <p>Subscribe to my Youtube</p>
            <img src={Sc6Y2} alt='icons' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard6;
