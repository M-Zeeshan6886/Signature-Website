import React from "react";
import "./Scard3.scss";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Scard3 = () => {
  return (
    <div className="scard3-container">
      <div className="scard3-container-content">
        <h2>Andriana Jacobs</h2>
        <hr />
        <p>HR MANAGER | CAPITOL</p>
        <p>mobile: +1 757 3145 2220</p>
        <p>email: andriana@mysignature.io</p>
        <div className="scard3-container-content-icons">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};

export default Scard3;
