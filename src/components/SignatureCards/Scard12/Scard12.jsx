import React from "react";
import "./Scard12.scss";
import {
  Sc12logo,
  Sc8Icon1,
  Sc8Icon2,
  Sc8Icon3,
  Sc8Icon4,
} from "../../../assets";

const Scard12 = () => {
  return (
    <>
      <div className="sc12-container">
        <div className="sc12-container-content">
          <div className="sc12-container-content-left">
            <h1>James</h1>
            <h1>Doe</h1>
            <div className="sc12-container-content-left-data">
              <p>Digital Product Designer</p>
              <p>He/Him</p>
            </div>
          </div>
          <div className="sc12-container-content-middle">
            <p>@Jmaesdoe</p>
            <p>000, 000, 0000</p>
            <p>Jamesdoe@website.com</p>
            <div className="sc12-container-content-middle-icons">
              <img src={Sc8Icon1} alt="Icons" />
              <img src={Sc8Icon2} alt="Icons" />
              <img src={Sc8Icon3} alt="Icons" />
              <img src={Sc8Icon4} alt="Icons" />
            </div>
          </div>
          <div className="sc12-container-content-right">
            <img src={Sc12logo} alt="Icons" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Scard12;
