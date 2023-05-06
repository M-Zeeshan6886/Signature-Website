import React from "react";
import {
  ChatIcon,
  FacebookIcon,
  FtLogo,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../assets";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-container-content1">
          <div className="footer-container-content1-rw1">
            <div className="footer-container-content1-rw1-col1">
              <h3>Info</h3>
              <p>Reviews</p>
              <p>Privacy Policy</p>
              <p>Contact Us</p>
              <p>Pricing</p>
            </div>
            <div className="footer-container-content1-rw1-col2">
              <h3>Tools</h3>
              <p>Email Signature examples</p>
              <p>Gmail Signature</p>
              <p>Outlook Signature</p>
              <p>Apple mail Signature</p>
            </div>
          </div>
          <div className="footer-container-content1-rw2">
            <div className="footer-container-content1-rw2-col3">
              <h3>Resources</h3>
              <p>Templates</p>
              <p>What is stampify?</p>
            </div>
            <div className="footer-container-content1-rw2-col4">
              <h3>Languages</h3>
              <p>English</p>
            </div>
            <div className="footer-container-content1-rw2-col5">
              <h3>Social</h3>
              <div className="footer-container-content1-rw2-col5-fticons">
                <img src={LinkedinIcon} alt="FooterIcons" />
                <img src={YoutubeIcon} alt="FooterIcons" />
                <img src={FacebookIcon} alt="FooterIcons" />
                <img src={TwitterIcon} alt="FooterIcons" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-container-content2">
          <h1>
            <img src={FtLogo} alt="Logo" />
            <span>© 2023 Stampify. All rights reserved.</span>
          </h1>
          <img src={ChatIcon} alt="Icons" />
        </div>
      </div>
    </>
  );
};

export default Footer;
