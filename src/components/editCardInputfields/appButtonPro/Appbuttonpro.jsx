import React from "react";
import "./Appbuttonpro.scss";
import Pro from "../../pro/Pro";

const Appbuttonpro = ({ appbuttonicon, appbuttonlabel }) => {
  return (
    <>
      <div className="appbuttonpro">
        <div className="appbuttonpro-content">
          <div className="appbuttonpro-content-item1">
            <img src={appbuttonicon} alt="AppIcons" />
            <h3>{appbuttonlabel}</h3>
          </div>
            <Pro />
        </div>
      </div>
    </>
  );
};

export default Appbuttonpro;
