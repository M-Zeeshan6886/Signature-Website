import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../../components/Common Components";
import "./EditeCard.scss";
import { ToggleButton } from "@mui/material";
import BasicTabs from "../../pricing/toggleButtons/Togglebuttons";
import {
  Popupbox,
  Scard1,
  Scard2,
  Scard3,
  Scard4,
  Scard5,
  Scard6,
  Scard7,
} from "../../../components";
import {
  AppleIcon,
  Checkpopup2,
  Crosspopup,
  Crosspopup2,
  DesignIcon,
  EchatIcon,
  GeneralIcon,
  Gmail,
  Googlebtn,
  GreenIcon,
  MacIcon,
  OutDesk,
  OutWeb,
  OutY,
  RedIcon,
  SocialIcon,
  TempIcon,
  YellowIcon,
} from "../../../assets";
import Pro from "../../../components/pro/Pro";

const EditeCard = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  const [newmodal, setnewModal] = useState(false);
  const newtoggleModal = () => {
    setnewModal(!newmodal);
  };
  if (newmodal) {
    document.body.classList.add("active-modal2");
  } else {
    document.body.classList.remove("active-modal2");
  }
  return (
    <>
      {/*################################# Modal/Popup 1 #########################3 */}
      {modal ? (
        <div className="popup-overlay">
          <div className="popup-overlay-main">
            <h3>I’LL be using my signature with:</h3>
            <div className="popup-overlay-main-content">
              <div className="popup-overlay-main-content-rw1">
                <div className="popup-overlay-main-content-rw1-left">
                  <Popupbox popupicon={Gmail} popuptext="Gamil" />
                  <Popupbox
                    popupicon={Googlebtn}
                    popuptext="Google workspace"
                  />
                </div>
                <div className="popup-overlay-main-content-rw1-right">
                  <Popupbox popupicon={OutDesk} popuptext="Outlook Desktop" />
                  <Popupbox popupicon={OutWeb} popuptext="Outlook Deskweb" />
                </div>
              </div>
              <div className="popup-overlay-main-content-rw2">
                <div className="popup-overlay-main-content-rw2-left">
                  <Popupbox popupicon={MacIcon} popuptext="Mac Mail" />
                  <Popupbox popupicon={AppleIcon} popuptext="Iphone" />
                </div>
                <Popupbox popupicon={OutY} popuptext="Outlook web" />
              </div>
              <div className="popup-overlay-main-content-btnfield">
                <button
                  className="popup-overlay-main-content-btnfield-btn"
                  onClick={newtoggleModal}
                >
                  Ok Done
                </button>
              </div>
            </div>
          </div>
          <img src={Crosspopup} alt="Icon" onClick={toggleModal} />
        </div>
      ) : (
        ""
      )}
      {/*################################# Modal/Popup 2 #########################3 */}

      {newmodal ? (
        <div className="popup-overlay2">
          <div className="popup-overlay2-main">
            <div className="popup-overlay2-main-header">
              <h3>Add to your eamil</h3>
              <img src={Crosspopup2} alt="Icon" onClick={newtoggleModal} />
            </div>
            <div className="popup-overlay2-main-content">
              <div className="popup-overlay2-main-content-left">
                <div className="popup-overlay2-main-content-left-items">
                  <img src={Gmail} alt="icon" />
                  <p>Gmail</p>
                  <Pro />
                </div>
                <div className="popup-overlay2-main-content-left-items">
                  <img src={Googlebtn} alt="icon" />
                  <p>Google workspace</p>
                </div>
                <div className="popup-overlay2-main-content-left-items">
                  <img src={OutDesk} alt="icon" />
                  <p>Outlook Desktop</p>
                </div>

                <div className="popup-overlay2-main-content-left-items">
                  <img src={MacIcon} alt="icon" />
                  <p>Mac Mail</p>
                  <Pro />
                </div>
                <div className="popup-overlay2-main-content-left-items">
                  <img src={AppleIcon} alt="icon" />
                  <p>Iphone</p>
                  <Pro />
                </div>
                <div className="popup-overlay2-main-content-left-items">
                  <img src={OutY} alt="icon" />
                  <p>Outlook web</p>
                  <Pro />
                </div>
              </div>
              <div className="popup-overlay2-main-content-right">
                <div className="popup-overlay2-main-content-right-content">
                  <h1>Add my new email signature to Gmail?</h1>
                  <div className="popup-overlay2-main-content-right-content-items">
                    <img src={Checkpopup2} alt="Icons" />
                    <p>Your email is assigned to</p>
                  </div>
                  <button className="popup-overlay2-main-content-right-content-btn">
                    {" "}
                    Refresh your Gmail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <Navbar />
      <div className="editcard-container">
        <div className="editcard-container-content">
          <div className="editcard-container-content-left">
            <div className="navedit-container">
              <div className="navedit-container-content">
                <BasicTabs />
              </div>
            </div>
          </div>
          <div className="editcard-container-content-right">
            <div className="editcard-container-content-right-mainContainer">
              <h1>Free Email Signature Generator</h1>
              <div className="editcard-container-content-right-mainContainer-content">
                <Emailcardbox />
              </div>
              <div className="btn-field">
                <button onClick={toggleModal}>Get Started</button>
              </div>
            </div>
            <div className="editcard-container-content-right-echaticon">
              <img src={EchatIcon} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditeCard;

const Emailcardbox = () => {
  return (
    <>
      <div className="emailbox">
        <div className="emailbox-content">
          <div className="emailbox-content-rw1">
            <div className="emailbox-content-rw1-items">
              <img src={RedIcon} alt="Icons" />
              <img src={YellowIcon} alt="Icons" />
              <img src={GreenIcon} alt="Icons" />
            </div>
          </div>
          <div className="emailbox-content-rw2">
            <input
            // placeholder="jacobwalker@acmeinc.com"
            />
            <input
            //  placeholder=""
            />
          </div>
          <div className="emailbox-content-rw3">
            <Scard6 />
          </div>
        </div>
      </div>
    </>
  );
};
