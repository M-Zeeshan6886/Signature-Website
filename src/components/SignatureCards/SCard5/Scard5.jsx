import React from "react";
import "./Scard5.scss";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Scard5 = () => {
  return (
    <div className="scard5-container">
      <div className="scard5-container-content">
        <div className="scard5-container-content-left">
          <h1>AMINA DELAROSA</h1>
          <p>PR MANAGER</p>
          <div className="scard5-container-content-left-icons">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <BsFacebook />
          </div>
        </div>
        <div className="scard5-container-content-right">
          <div className="scard5-container-content-right-adress">
            <h2>A</h2>
            <p>55 Halsey St Brooklyn, NY</p>
          </div>
          <div className="scard5-container-content-right-teli">
            <h2>T</h2>
            <p>555 335 3637</p>
          </div>
          <div className="scard5-container-content-right-email">
            <h2>E</h2>
            <p>amina@example.com</p>
          </div>
            <span>mysignature.io</span>
        </div>
      </div>
    </div>
  );
};

export default Scard5;
