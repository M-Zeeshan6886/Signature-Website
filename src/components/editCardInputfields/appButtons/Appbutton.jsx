import React from "react";
import "./Appbutton.scss";
import { Appstyle } from "../../../assets";

const Appbutton = ({ appbuttonlabel, appbuttonicon }) => {
  return (
    <>
      <div className="appbutton">
        <div className="appbutton-content">
          <img src={appbuttonicon} alt="AppIcons" />
          <h3>{appbuttonlabel}</h3>
        </div>
      </div>
    </>
  );
};

export default Appbutton;
