import React, { useState } from "react";
import { Adown, AUp } from "../../assets";
import "./Dropdowndiv.scss";

const AskqBox = ({ asktittle }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="aqbox" onClick={() => setShow(!show)}>
      <div className="aqbox-content">
        <h2> {asktittle} </h2>
        {show === true ? (
          <img src={Adown} alt="Arrowdown" onClick={() => setShow(!show)} />
        ) : (
          <img src={AUp} alt="Arrowdown" onClick={() => setShow(!show)} />
        )}
      </div>
      {show && (
        <div className="aqbox-innercontent">
          <p>
            Editing and updating email signatures takes time. And, time means
            money. With Stampify you can implement changes instantly without any
            messing around, allowing you and your team to get on with what you
            do best.
          </p>
          <p>
            Additionally, professional email signatures are proven to boost
            engagement, replies, and leads!
          </p>
        </div>
      )}
    </div>
  );
};
export default AskqBox;
