import React from "react";
import "./Popupbox.scss";

const Popupbox = ({ popupicon, popuptext }) => {
  return (
    <>
      <div className="popupbox">
        <div className="popupbox-content">
          <img src={popupicon} alt="Icons" />
          <h3>{popuptext}</h3>
        </div>
      </div>
    </>
  );
};

export default Popupbox;
