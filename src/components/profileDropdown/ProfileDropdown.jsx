import React from 'react';
import "./ProfileDropdown.scss";
import { dropdown1, dropdown2, dropdown3, dropdown4, dropdown5 } from '../../assets';

const ProfileDropdown = () => {
  return (
    <>
      <div className="pd-container">
        <div className="pd-container-content">
          <div className="pd-container-content-section">
            <img src={dropdown1} alt="Pd-Icons" />
            <p>Profile</p>
          </div>
          <hr />
          <div className="pd-container-content-section">
            <img src={dropdown2} alt="Pd-Icons" />
            <p>Pricing</p>
          </div>
          <hr />
          <div className="pd-container-content-section">
            <img src={dropdown3} alt="Pd-Icons" />
            <p>Add to your email</p>
          </div>
          <hr />
          <div className="pd-container-content-section">
            <img src={dropdown4} alt="Pd-Icons" />
            <p>Contact us</p>
          </div>
          <hr />
          <div className="pd-container-content-section">
            <img src={dropdown5} alt="Pd-Icons" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileDropdown