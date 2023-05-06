import React, { useState } from "react";
import "./Pricing.scss";
import { Footer, Navbar } from "../../components/Common Components";
import {
  Cardmethed1,
  Cardmethed2,
  Cardmethed3,
  Checkv,
  Checkvsky,
} from "../../assets";
import { AskqBox } from "../../components";

const Pricing = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <Navbar />

      {modal ? (
        <div className="popup-paymentmethod">
          <div className="popup-paymentmethod-content">
            <div className="popup-paymentmethod-content-left">
              <h1>Get STAMPIFY Pro</h1>
              <h1>
                $10 <span>50/mo</span>
              </h1>
              <p>pay annually</p>
              <div className="popup-paymentmethod-content-left-menu">
                <p>Premium templates</p>
                <p>Advance style & design</p>
                <p>Unlimited signatures</p>
                <p>Remove stampify branding</p>
                <p>Add animation</p>
                <p>Export to iphone etc</p>
              </div>
              <div className="popup-paymentmethod-content-left-btn">
                <button className="popup-paymentmethod-content-left-btn-btnpop">
                  Add up to 4 users for just $4.5/mo
                </button>
              </div>
            </div>
            <div className="popup-paymentmethod-content-right">
              <div className="popup-paymentmethod-content-right-cardtype">
                <input type="radio" id="cardmarthod1" name="active" />
                <img src={Cardmethed1} alt="Icons" for="cardmarthod1" />
                <input type="radio" id="cardmarthod2" name="active" />
                <img src={Cardmethed2} alt="Icons" for="cardmarthod2" />
                <input type="radio" id="cardmarthod3" name="active" />
                <img src={Cardmethed3} alt="Icons" for="cardmarthod3" />
              </div>
              <div className="popup-paymentmethod-content-right-inputfield">
                <input type="text" placeholder="Namr on card" />
                <input type="email" placeholder="Enter Email" />
                <input type="tel" placeholder="Card number" />
                <select>
                  <option value={1}>pakistan</option>
                  <option value={2}>India</option>
                  <option value={3}>USA</option>
                </select>
              </div>
              <button className="purchase-btn"> Purchase Now</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* ////////Contact Us///////////  */}
      <div className="pricing-container">
        <h1>Our plans for individuals and small teams</h1>
      </div>
      <div className="pricingcard-container2">
        <div className="pricingcard-container2-content">
          {/* <BasicTabs /> */}
          <h1>Starter</h1>
          <h1>Professional</h1>
          <h1>Small Business</h1>
        </div>
      </div>
      <div className="box-container-r1">
        <div className="tb1-container">
          <div className="tb1-container-content">
            <div className="tb1-container-content-rw1">
              <Cardbox1
                card1tittle="Choose the best plan for you"
                card1descrip="
          Join over 850K users in 100+ countries around the world which already
          enjoy a powerful email signature"
              />
              <Cardbox2
                cardtittle="Basic"
                cardusage="For Personal Use"
                carddescrip="Great to start for free with Stampify"
                // onClick={() => console.log("checked")}
                onClick={toggleModal}
              />
              <Cardbox2
                cardtittle="Standard"
                cardusage="For Personal Use"
                carddescrip="Packed With Primium Features"
                onClick={toggleModal}
              />
              <Cardbox2
                cardtittle="Professional"
                cardusage="For Small Business"
                carddescrip="For 1 To 5 Users Great For Small Business Team"
                onClick={toggleModal}
              />
            </div>
            <div className="tb1-container-content-rw2">
              <Cardbox1 card1tittle="Find the right package for your business." />
              <Cardbox3 />
              <Cardbox4 />
              <Cardbox5 />
            </div>
          </div>
        </div>
      </div>

      <div className="plansCards-container">
        <h2
        // onClick={toggleModal}
        >
          More Plans
        </h2>
        <div className="plansCards-container-content">
          <div className="plansCards-container-content-rw1">
            <CardsBoxp1
              cardptittle="Company"
              cardpdescrip="Great for small business team"
              cardpusers="6-10 Useres"
            />
            <CardsBoxp1
              cardptittle="Enterprise"
              cardpdescrip="Great for small business team"
              cardpusers="11-200 Useres"
            />
          </div>
          <div className="plansCards-container-content-rw2">
            <Cardboxp2 />
            <Cardboxp3 />
          </div>
        </div>
      </div>
      <div className="ask-questions-container">
        <h1>Frequently Asked Questions</h1>
        <div className="ask-questions-container-content">
          <div className="ask-questions-container-content-left">
            <AskqBox asktittle="Who Is Stampify For?" />
            <AskqBox asktittle="Does Stampify Work With My Email Client?" />
          </div>
          <div className="ask-questions-container-content-right">
            <AskqBox asktittle="Do I Have To Build My Own Signature?" />
            <AskqBox
              asktittle="Why Do I Need The Stampify Email Signature
Generator?"
            />
            <AskqBox
              asktittle="Why Do I Need The Stampify Email Signature
Generator?"
            />
            <AskqBox
              asktittle="Why Do I Need The Stampify Email Signature
Generator?"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;

const CardsBoxp1 = ({ cardptittle, cardpdescrip, cardpusers }) => {
  return (
    <div className="cardboxp1">
      <div className="cardboxp1-content">
        <h2> {cardptittle} </h2>
        <p>{cardpdescrip}</p>
        <span>{cardpusers}</span>
        <button>Get Started</button>
      </div>
    </div>
  );
};

const Cardboxp2 = () => {
  return (
    <div className="cardboxp2">
      <div className="cardboxp2-content">
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Everything in the Small Business</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Central portal to manage emails signatures</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Invite and manage 6-10 employees' permissions</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Connect GSuite and Office 365</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>VIP Customer service</p>
        </div>
      </div>
    </div>
  );
};
const Cardboxp3 = () => {
  return (
    <div className="cardboxp2">
      <div className="cardboxp2-content">
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Everything in the Company plan</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Central portal to manage emails signatures</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Invite and manage company employees' permissions</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>Connect GSuite and Office 365</p>
        </div>
        <div className="cardboxp2-content-items">
          <img src={Checkvsky} alt="checkvsky" />
          <p>VIP Customer service</p>
        </div>
      </div>
    </div>
  );
};

// CardBox Componnts
const Cardbox1 = ({ card1tittle, card1descrip }) => {
  return (
    <div className="cardbox1">
      <div className="cardbox1-content">
        <h2> {card1tittle} </h2>
        <p>{card1descrip}</p>
      </div>
    </div>
  );
};

const Cardbox2 = ({ cardtittle, cardusage, carddescrip, onClick }) => {
  return (
    <div className="cardbox2">
      <div className="cardbox2-content">
        <h2> {cardtittle} </h2>
        <span> {cardusage} </span>
        <p>{carddescrip}</p>
        <button onClick={onClick}>Get Started</button>
      </div>
    </div>
  );
};

const Cardbox3 = () => {
  return (
    <div className="cardbox3">
      <div className="cardbox3-content">
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Create one free signature.</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> No customisation</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Stampify branding</p>
        </div>
      </div>
    </div>
  );
};
const Cardbox4 = () => {
  return (
    <div className="cardbox3">
      <div className="cardbox3-content">
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Create Three signature.</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p>Up TO 10 Email Premium Templates</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Full Color And Size Customisation</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Access Professional Apps And Inegrations</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Remove Stampify Branding</p>
        </div>
      </div>
    </div>
  );
};
const Cardbox5 = () => {
  return (
    <div className="cardbox3">
      <div className="cardbox3-content">
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Everything In The Professional Plan</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Central Portal To Manage Emails Signatures</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Invite And Manage Five Employees' Permissions</p>
        </div>
        <div className="cardbox3-content-item1">
          <img src={Checkv} alt="Checkvector" />
          <p> Connect GSuite And Office 365</p>
        </div>
      </div>
    </div>
  );
};
