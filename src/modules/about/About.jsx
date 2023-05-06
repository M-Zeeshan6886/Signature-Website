import React from "react";
import { Footer, Navbar } from "../../components/Common Components";
import "./About.scss";
import {
  AboutImg,
  AboutImg1,
  AboutImg2,
  Check,
  Cross,
  FdImg1,
  FdImg2,
  FdImg3,
  FdImg4,
  Fdstar,
  PersonalImg1,
  PersonalImg2,
  ProfileImg1,
  ProfileImg2,
  SideImg,
} from "../../assets";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container1">
        <div className="about-container1-content">
          <div className="about-container1-content-left">
            <h1>Helping millions grow better.</h1>
            <p>
              Build unique and eye-catching email signatures that streamline
              your brand. Save time with conversion -optimised email signature
              templates.
            </p>
            <Engagingbtn btntext="Genrate My Email Sugnature" />
          </div>
          <div className="about-container1-content-right">
            <img src={SideImg} alt="SideImg" />
          </div>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission-container-content">
          <h1>Our Mission</h1>
          <p>
            There's this notion that to grow a business, you have to be
            ruthless. But we know there's a better way to grow. One where what's
            good for the bottom line is also good for customers. We believe
            businesses can grow with a conscience, and succeed with a soul — and
            that they can do it with inbound. That's why we've created an
            ecosystem uniting software, education, and community to help
            businesses grow better every day.
          </p>
        </div>
      </div>
      <div className="about-stampify2">
        <div className="about-stampify2-content">
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
            <Engagingbtn btntext="Create Signature" />
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
            <Engagingbtn btntext="Create Signature" />
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
              <Engagingbtn btntext="About Stampify" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div className="feedback-container">
        <span>Happy Client Says</span>
        <h1>Some Lovely Feedback From</h1>
        <h1>My Client</h1>
        <div className="feedback-container-content">
          <div className="feedback-container-content-rw1">
            <div className="feedback-container-content-rw1-col1">
              <Feedbackcards1 />
              <FeedbackCards2
                FdImgs={FdImg2}
                Fdtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
                Fdname="Oliver Charlotte"
              />
            </div>
            <div className="feedback-container-content-rw1-col2">
              <FeedbackCards2
                FdImgs={FdImg1}
                Fdtext="Lorem Ipsum is simply dummy text of the printing."
                Fdname="Amelia william"
              />
              <FeedbackCards2
                FdImgs={FdImg3}
                Fdtext="Lorem Ipsum is simply dummy text of the printing."
                Fdname="Amelia william"
              />
            </div>
          </div>
          <div className="feedback-container-content-rw2">
            <div className="feedback-container-content-rw2-col1">
              <FeedbackCards2
                FdImgs={FdImg4}
                Fdtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
                Fdname="Oliver Charlotte"
              />
              <Feedbackcards1 />
            </div>
            <div className="feedback-container-content-rw2-col2">
              <FeedbackCards2
                FdImgs={FdImg3}
                Fdtext="Lorem Ipsum is simply dummy text of the printing."
                Fdname="Amelia william"
              />
              <FeedbackCards2
                FdImgs={FdImg1}
                Fdtext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
                Fdname="Oliver Charlotte"
              />
            </div>
          </div>
          <div className="feedback-container-content-rw3">
            <FeedbackCards2
              FdImgs={FdImg2}
              Fdtext="Lorem Ipsum is simply dummy text of the printing."
              Fdname="Amelia william"
            />
            <FeedbackCards2
              FdImgs={FdImg4}
              Fdtext="Lorem Ipsum is simply dummy text of the printing."
              Fdname="Amelia william"
            />
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default About;

const Engagingbtn = ({ btntext }) => {
  return <button className="engagingbtn"> {btntext} </button>;
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
