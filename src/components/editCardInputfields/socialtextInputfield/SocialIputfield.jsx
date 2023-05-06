import React from "react";
import "./SocialIputfield.scss";

const SocialIputfield = ({ socailicon, sociallable, socialplaceholder }) => {
  return (
    <>
      <div className="socialinput">
        <div className="socialinput-content">
          <lable>{sociallable}</lable>
          <div className="socialinput-content-inputfield">
            <img src={socailicon} alt="Icons" />
            <input placeholder={socialplaceholder} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialIputfield;
