import React from "react";
import "./WorkSeam.scss";
import {
  AppleIcon,
  Gmail,
  Googlebtn,
  MacIcon,
  OutDesk,
  OutWeb,
  OutY,
} from "../../assets";

const WorkSeam = () => {
  return (
    <>
      <div className="seam">
        <div className="workseam">
          <div className="workseam-container">
            <div className="workseam-container-top">
              <Item image={Gmail}>Gmail</Item>
              <Item image={Googlebtn}>Google workspace</Item>
              <Item image={OutDesk}>Outlook Desktop</Item>
              <Item image={OutWeb}>Outlook Web</Item>
            </div>
            <div className="workseam-container-bottom">
              <Item image={MacIcon}>Mac Mail</Item>
              <Item image={AppleIcon}>ipone</Item>
              <Item image={OutY}>Outlook Web</Item>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSeam;

const Item = (props) => {
  return (
    <>
      <div className="workseam-card">
        <img src={props.image} alt="icon" />
        <p>{props.children}</p>
      </div>
    </>
  );
};
