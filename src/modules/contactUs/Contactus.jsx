import React from "react";
import "./Contactus.scss";
import { Footer, Navbar } from "../../components/Common Components";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AskqBox } from "../../components";

const Contactus = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
  });
  return (
    <>
      <Navbar />
      <div className="contactus-container">
        {/* <div className="contactus-container-content"></div> */}
        <h1>Contact Us </h1>
        <p>Contact the help team</p>
      </div>
      <div className="contactform-container">
        <div className="contactform-container-content">
          <Formik
            initialValues={{
              email: "",
              name: "",
            }}
            validationSchema={validate}
          >
            {(formik) => (
              <div>
                <Form>
                  <FormInput
                    label="Enter Your Name"
                    name="name"
                    type="text"
                    place="Enter your name"
                  />
                  <FormInput
                    label="Enter Your Email address"
                    name="email"
                    type="email"
                    place="Enter your email"
                  />
                </Form>
              </div>
            )}
          </Formik>
          <div className="contactform-container-content-inputfield">
            <label for="textarea">Message</label>
            <textarea
              id="textarea"
              placeholder="Write your message here"
            ></textarea>
            <div className="contactform-container-content-inputfield-btn">
              <button>Submit</button>
            </div>
          </div>
          <div className="contactform-container-content-callus">
            <h1>Call Us</h1>
            <p>675-3244-345-111</p>
            <p>675-3244-345-111</p>

            <h1>location</h1>
            <span>
              1134 Castle Hill Ave Bronx North Dakota Zip/Postal Code 10462
              United States America
            </span>
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

export default Contactus;
