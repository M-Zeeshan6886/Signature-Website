import React, { useState } from "react";
import "./DesignColorInput.scss";
// import styled from 'styled-components';

const DesignColorInput = ({ dclabel, dctextlabel2 }) => {
  const [color, setColor] = useState("#6ec4cf");
  const [textcolor, setTextColor] = useState("#667B96");
  return (
    <>
      <div className="designcolor-container">
        <div className="design-container-content">
          <label>{dclabel} </label>
          <input value={color} onChange={(e) => setColor(e.target.value)} />
          <div className="design-container-content-div">
            <div
              className="design-container-content-div-colorbox"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="designcolor-container2">
        <div className="design-container2-content">
          <label>{dctextlabel2} </label>
          <input
            value={textcolor}
            onChange={(e) => setTextColor(e.target.value)}
          />
          <div className="design-container2-content-div">
            <div
              className="design-container2-content-div-colorbox"
              style={{ backgroundColor: textcolor }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignColorInput;
