import React, { useState } from "react";
import "./Forgetpassword.scss";
import { FrgtIcon } from "../../assets";

const Forgetpassword = () => {
  const [Fpopup, setFpopup] = useState(false);
  const forgotClick = () => {
    setFpopup(!Fpopup);
  };
  return (
    <>
      {/* ######################## Forgot Popup #################################### */}

      {Fpopup ? (
        <div className="forget-popup">
          <p>Your password has been changed successfully!</p>
        </div>
      ) : (
        ""
      )}
      {/* ######################## Forgot Container #################################### */}
      <div className="forget-container">
        <div className="forget-container-content">
          <div className="forget-container-content-left">
            <h1>Forgot password</h1>
            <p>Your Password has Expired, Please choose a New Password</p>
            <div className="forget-container-content-left-innercontainer">
              <div className="forget-container-content-left-innercontainer-content">
                <h1>Email Sent</h1>
                <img src={FrgtIcon} alt="Icon" />
                <p>Enter your six digit code sent on the given email</p>

                <div className="forget-container-content-left-innercontainer-content-inputfield">
                  <input type="tel" />
                  <input type="tel" />
                  <input type="tel" />
                  <input type="tel" />
                  <input type="tel" />
                  <input type="tel" />
                </div>
                <button onClick={forgotClick}>Submit</button>
              </div>
            </div>
          </div>
          <div className="forget-container-content-right"></div>
        </div>
      </div>
    </>
  );
};

export default Forgetpassword;
