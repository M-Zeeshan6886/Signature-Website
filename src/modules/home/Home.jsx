import React from "react";
import {
  SideImg,
  Gmail,
  Googlebtn,
  OutDesk,
  OutWeb,
  MacIcon,
  AppleIcon,
  OutY,
  ControlIcon,
  ClientIcon,
  InstantIcon,
  EyeIcon,
  SolutionImg,
  TampImg1,
  TampImg2,
  TampImg3,
  TampImg4,
  TampImg5,
  TampImg6,
  TampImg7,
  PersonalImg1,
  PersonalImg2,
  Cross,
  ProfileImg1,
  Check,
  ProfileImg2,
  AboutImg1,
  AboutImg2,
  AboutImg,
  Fdstar,
} from "../../assets";
import { AskqBox, WorkSeam } from "../../components";
import { Footer, Navbar } from "../../components/Common Components";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ############ NavBar Component ######## */}
      <Navbar />
      {/* ############ Sub_Header ######## */}
      <div className="subheader-container">
        <div className="subheader-container-content">
          <div className="subheader-container-content-left">
            <h1>Email Signature Management</h1>
            <h1 className="subheader-container-content-left-second_h2">
              Made Easy
            </h1>
            <p>
              Build unique and eye-catching email signatures that streamline
              your brand. Save time with conversion -optimised email signature
              templates.
            </p>
            <Link to="/createsignature">
              <Engagingbtn btntext="Generate My Email Signature" />
            </Link>
          </div>
          <div className="subheader-container-content-right">
            <img src={SideImg} alt="SideImg" />
          </div>
        </div>
      </div>
      {/* ############ Social buttons Component ######## */}
      <div className="workseamlessly-container">
        <div className="workseamlessly-container-content">
          <h1>Works Seamlessly With</h1>
          <div className="workseamlessly-container-content-rw1">
            <div className="workseamlessly-container-content-rw1-gp1">
              <Socialbtn btntext="Gmail" btnIcon={Gmail} />
              <Socialbtn btntext="Google workspace" btnIcon={Googlebtn} />
            </div>
            <div className="workseamlessly-container-content-rw1-gp2">
              <Socialbtn btntext="Outlook Desktop" btnIcon={OutDesk} />
              <Socialbtn btntext="Outlook Web" btnIcon={OutWeb} />
            </div>
          </div>
          <div className="workseamlessly-container-content-rw2">
            <Socialbtn btntext="Mac Mail" btnIcon={MacIcon} />
            <Socialbtn btntext="iphone" btnIcon={AppleIcon} />
            <Socialbtn btntext="Outlook Web" btnIcon={OutY} />
          </div>
        </div>
        <div className="workseamlessly-container-content-rw3">
          <Link to="/createsignature">
            <Engagingbtn btntext="Try Stampify" />
          </Link>
        </div>
      </div>
      {/* <WorkSeam/> */}
      <div className="signaturesolutions-container">
        <h1>Email Signature Solutions Without The Hassle</h1>
        <div className="signaturesolutions-container-content">
          <div className="signaturesolutions-container-content-rw1">
            <div className="signaturesolutions-container-content-rw1-content1">
              <Ssolutions
                Vector={ControlIcon}
                sheading="Complete Control"
                ptext="You’re in the driving seat. Either build your own email signature from
              scratch or use one of our predefined, yet customisable templates."
                stext="Text, font, images, colour, branding – you choose it all."
              />
            </div>
            <div className="signaturesolutions-container-content-rw1-content2">
              <Ssolutions
                Vector={ClientIcon}
                sheading="Auto Client Sync"
                ptext="Wave manual change"
                stext=" Use our simple API integration's to automatically upload any email signature changes into your chosen email client"
              />
            </div>
          </div>
          <div className="signaturesolutions-container-content-rw2">
            <div className="signaturesolutions-container-content-rw2-content1">
              <Ssolutions
                Vector={InstantIcon}
                sheading="Instant Global "
                ptext="Managing your company email signature has never been so easy."
                stext="Revamp the design of everyone’s signature in just one click, unifying your brand image in an instant."
              />
            </div>
            <div className="signaturesolutions-container-content-rw2-content2">
              <Ssolutions
                Vector={EyeIcon}
                sheading="Auto Client Sync"
                ptext="Wave manual change"
                stext=" Use our simple API integration's to automatically upload any email signature changes into your chosen email client"
              />
            </div>
          </div>
          <div className="signaturesolutions-container-content-rw3">
            <img src={SolutionImg} alt="Solutions-right-img" />
          </div>
        </div>
      </div>
      <div className="signature-template">
        <div className="signature-template-container">
          <h1>
            Over <span>10+</span> Email Signature Templates
          </h1>
          <p>
            You’re guaranteed to find the perfect email signature for your
            business, no matter your industry, profession, or job title. Choose
            from many of email signatures that have been designed and tested by
            our email marketing experts
          </p>
        </div>

        <div className="signature-template-innercontainer">
          <div className="signature-template-innercontainer-content">
            <div className="signature-template-innercontainer-content-col1">
              <img src={TampImg1} alt="TamplateImgs" />
              <img src={TampImg2} alt="TamplateImgs" />
            </div>
            <div className="signature-template-innercontainer-content-col2">
              <img src={TampImg3} alt="TamplateImgs" />
              <img src={TampImg4} alt="TamplateImgs" />
              <img src={TampImg5} alt="TamplateImgs" />
            </div>
            <div className="signature-template-innercontainer-content-col3">
              <img src={TampImg6} alt="TamplateImgs" />
              <img src={TampImg7} alt="TamplateImgs" />
            </div>
          </div>
          <div className="signature-template-innercontainer-content2">
            <Link to="/createsignature">
              <Engagingbtn btntext="Choose a tamplate" />
            </Link>
          </div>
        </div>
      </div>
      <div className="PE-solutions-container">
        <div className="PE-solutions-container-content">
          <h1>Why You Need Professional Email Signature Solutions</h1>
          <div className="PE-solutions-container-content-rw2">
            <PESignatureCards
              pecardtittle="50%"
              pecardtext="50% of all B2B leads come from email marketing."
            />
            <PESignatureCards
              pecardtittle="174%"
              pecardtext="Email marketing receives
174% more engagement
than social media"
            />
            <PESignatureCards
              pecardtittle="66%"
              pecardtext="66% of decision makers
use email as their
primary correspondence"
            />
            <PESignatureCards
              pecardtittle="15%"
              pecardtext="People with professional
email signatures generate
15% more leads"
            />
          </div>
          <div className="PE-solutions-container-content-btn">
            <Link to="/createsignature">
              <Engagingbtn btntext="Create An Email Signature" />
            </Link>
          </div>
        </div>
      </div>
      <div className="company-signature-container">
        <h1>Build A Personal & Company Email Signature</h1>
        <div className="company-signature-container-content1">
          <div className="company-signature-container-content1-left">
            <h2>Personal Email Signature</h2>
            <p>
              Are you a solopreneur or sole-trader looking to elevate the
              professionalism of your small business? Creating a personalised
              and branded email signature is sure to catch the eye of prospects
              and customers.
            </p>
            <p>
              In just a few minutes, and with zero design or coding experience,
              your new email signature will be live and ready to send
            </p>
            <Link to="/createsignature">
              <Engagingbtn btntext="Create Signature" />
            </Link>
          </div>
          <div className="company-signature-container-content1-right">
            <img src={PersonalImg1} alt="PersonalImgs" />
          </div>
        </div>
        <div className="company-signature-container-content2">
          <div className="company-signature-container-content2-left">
            <h2>Company Email Signature</h2>
            <p>
              Create and manage company-wide email signatures in an instant.
              Thanks to simple integration and behind the scenes coding,
              Stampify enables small to medium sized businesses to make email
              signature management easy
            </p>
            <p>
              In just a few minutes, and with zero design or coding experience,
              your new email signature will be live and ready to send.
            </p>
            <Link to="/createsignature">
              <Engagingbtn btntext="Create Signature" />
            </Link>
          </div>
          <div className="company-signature-container-content2-right">
            <img src={PersonalImg2} alt="PersonalImgs" />
          </div>
        </div>
      </div>
      <div className="stampify-container">
        <h1>Choosing Stampify Makes Sense</h1>
        <div className="stampify-container-innercontainer">
          <div className="stampify-container-innercontainer-content">
            <div className="stampify-container-innercontainer-content-rw1">
              <StampCards
                stamptittle="Professional Designs"
                stamptext="Eye-catching and business
focussed designs created
by email experts"
              />
              <StampCards
                stamptittle="Professional Designs"
                stamptext="Eye-catching and business
focussed designs created
by email experts"
              />
              <StampCards
                stamptittle="Professional Designs"
                stamptext="Eye-catching and business
focussed designs created
by email experts"
              />
              <StampCards
                stamptittle="Professional Designs"
                stamptext="Eye-catching and business
focussed designs created
by email experts"
              />
            </div>
            <div className="stampify-container-innercontainer-content-rw2">
              <div className="stampify-container-innercontainer-content-rw2-content">
                <img src={Cross} alt="Icons" className="ProIcons" />
                <img src={ProfileImg1} alt="Icons" className="profileImg" />
                <img src={Check} alt="Icons" className="ProIcons" />
                <img src={ProfileImg2} alt="Icons" className="profileImg" />
              </div>
            </div>
            <div className="stampify-container-innercontainer-content-rw3">
              <Link to="/about">
                <Engagingbtn btntext="About Stampify" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="signup-stampify-container">
        <div className="signup-stampify-container-content">
          <h1>Give Your Business A Professional Look & Streamline</h1>
          <h1> Your Brand Today</h1>
          <Link to="/signup">
            <Engagingbtn btntext="Sign Up To Stampify" />
          </Link>
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
      <div className="about-stampify-container">
        <div className="about-stampify-container-content">
          <h1>About Stampify</h1>
          <p>
            We set out on a mission to create the best email signature software.
            Not just with the most impressive features, but supported by a
            dedicated service team that’s passionate about the success of our
            users. At that moment, Stampify was born.
          </p>
        </div>
      </div>
      <div className="about-stampify-container2">
        <div className="about-stampify-container2-content">
          <div className="about-stampify-container2-content-left">
            <h2>Passionate About Supporting The Little Guy</h2>
            <p>
              Just like you, we’re entrepreneurs. We know the struggles of
              building a company from scratch. With that in mind, we committed
              ourselves to creating a platform accessible to sole traders and
              small to medium sized businesses, giving them features and
              functionality usually reserved for incredibly expensive enterprise
              systems.
            </p>
            <p>
              You might be the little guy now, but we’re dedicated to helping
              you outmuscle the goliaths of your industry
            </p>
          </div>
          <div className="about-stampify-container2-content-right">
            <img src={AboutImg1} alt="About img" />
          </div>
        </div>
      </div>
      <div className="about-stampify-container3">
        <div className="about-stampify-container3-content">
          <div className="about-stampify-container3-content-left">
            <h2>No Company Left Behind</h2>
            <p>
              We get it, technology isn’t everyone’s jam. Setting up an email
              signature can be a tiresome task. With Stampify, we pride
              ourselves on the fact that anyone can use our system. And, in the
              unlikely event you can’t create the email signature of your
              dreams, our team of experts will be on-hand to get it over the
              line
            </p>
          </div>
          <div className="about-stampify-container3-content-right">
            <img src={AboutImg2} alt="About img" />
          </div>
        </div>
      </div>
      <div className="about-stampify-container4">
        <div className="about-stampify-container4-content">
          <div className="about-stampify-container4-content-left">
            <h2>Place Your Trust In Us</h2>
            <p>
              As an Australian-based company, we take great pride in being the
              chosen email signature software provider of companies across the
              region and beyond. Everything we do is to make the lives of our
              users easier and to help their businesses perform better.
            </p>
            <p>
              From our incredibly affordable platform to our incredibly secure
              database, you can trust us to serve you while protecting your
              sensitive data
            </p>
          </div>
          <div className="about-stampify-container4-content-right">
            <img src={AboutImg} alt="About img" />
          </div>
        </div>
      </div>
      <div className="getStarted-stampify">
        <Link to="/createsignature">
          <Engagingbtn btntext="Get Started with Stampify" />
        </Link>
      </div>
      <div className="priority-container">
        <div className="priority-container-content">
          <h1>Our top priorities are protecting your privacy and your data</h1>
          <p>
            We base our work on your patronage and confidence. We've created a
            platform that offers a thorough architecture to safeguard any data,
            including your team's and your own
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

const Engagingbtn = ({ btntext }) => {
  return <button className="engagingbtn"> {btntext} </button>;
};

const Socialbtn = ({ btntext, btnIcon }) => {
  return (
    <button className="socialbtns">
      <img src={btnIcon} alt="EMAil" />
      <p> {btntext} </p>
    </button>
  );
};

const Ssolutions = ({ Vector, sheading, ptext, stext }) => {
  return (
    <div className="ssolutions">
      <div className="ssolutions-content">
        <img src={Vector} alt="Icons" />
        <h1> {sheading} </h1>
        <p>{ptext}</p>
        <span> {stext} </span>
      </div>
    </div>
  );
};

const PESignatureCards = ({ pecardtittle, pecardtext }) => {
  return (
    <div className="pecards">
      <div className="pecards-content">
        <h1>{pecardtittle}</h1>
        <p> {pecardtext} </p>
      </div>
    </div>
  );
};
const StampCards = ({ stamptittle, stamptext }) => {
  return (
    <div className="stampcards">
      <div className="stampcards-content">
        <h1>{stamptittle}</h1>
        <p> {stamptext} </p>
      </div>
    </div>
  );
};

const Feedbackcards1 = () => {
  return (
    <div className="feedbackcards1">
      <div className="feedbackcards1-content">
        <div className="feedbackcards1-content-rw1">
          <h1>
            4.9<span>/4</span>
          </h1>
          <img src={Fdstar} alt="StarsImg" />
        </div>
        <h2>Very Good</h2>
        <span>41 reviews</span>
      </div>
    </div>
  );
};

const FeedbackCards2 = ({ FdImgs, Fdtext, Fdname }) => {
  return (
    <div className="feedbackcards2">
      <div className="feedbackcards2-content">
        <img src={FdImgs} alt="FdImgs" />
        <p> {Fdtext} </p>
        <h2> {Fdname} </h2>
        <p>Founder & CEO</p>
      </div>
    </div>
  );
};
