import React from "react";
import "./Cardinputfields.scss";
const Cardinputfields = ({ inputlable, inputph }) => {
  return (
    <>
      <div className="inputfield">
        <div className="inputfield-content">
          <label>{inputlable}</label>
          <input placeholder={inputph} />
        </div>
      </div>
    </>
  );
};

export default Cardinputfields;
