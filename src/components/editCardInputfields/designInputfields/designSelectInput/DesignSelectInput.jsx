import React from "react";
import "./DesignSelectInput.scss";

const DesignSelectInput = ({ selectlabel, selectlabel2 }) => {
  return (
    <>
      <div className="selectinput-container">
        <div className="selectinput-container-content">
          <label>{selectlabel}</label>
          <select>
            <option value="0">Lato</option>
            <option value="1">Poppins</option>
          </select>
        </div>
      </div>
      <div className="selectinput-container2">
        <div className="selectinput-container2-content">
          <label>{selectlabel2}</label>
          <select>
            <option value="0">12</option>
            <option value="0">14</option>
            <option value="0">16</option>
            <option value="0">18</option>
            {/* <option value="1">Poppins</option> */}
          </select>
        </div>
      </div>
    </>
  );
};

export default DesignSelectInput;
