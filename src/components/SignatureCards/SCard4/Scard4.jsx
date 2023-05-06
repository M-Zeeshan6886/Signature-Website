import React from "react";
import { Sc4icon1, Sc4icon2, Sc4icon3 } from "../../../assets";
import "./Scard4.scss";

const Scard4 = ({ Profileimg, Name, NA, PN, email, website, skype }) => {
  return (
    <div className="scard4-contianer">
      <div className="scard4-contianer-content">
        <div className="scard4-contianer-content-left">
          <img src={Profileimg} alt="ProfileImgs" />
        </div>
        <div className="scard4-contianer-content-right">
          <h1> {Name} </h1>
          <p> {NA} </p>
          <div className="scard4-contianer-content-right-cdata">
            <div className="scard4-contianer-content-right-cdata-phone">
              <span>Phone:</span>
              <p>{PN} </p>
            </div>
            <div className="scard4-contianer-content-right-cdata-email">
              <span>Email:</span>
              <p> {email} </p>
            </div>
            <div className="scard4-contianer-content-right-cdata-website">
              <span>WEbsite:</span>
              <p> {website} </p>
            </div>
            <div className="scard4-contianer-content-right-cdata-skype">
              <span>Skype:</span>
              <p> {skype} </p>
            </div>
          </div>
          <div className="scard4-contianer-content-right-iconfield">
            <div className="scard4-contianer-content-right-iconfield-icons">
              <img src={Sc4icon1} alt="Icons" />
              <img src={Sc4icon2} alt="Icons" />
              <img src={Sc4icon3} alt="Icons" />
            </div>
            <div className="scard4-contianer-content-right-iconfield-icons-data">
              <p>Book a meeting</p>
              <p>Request a demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard4;
