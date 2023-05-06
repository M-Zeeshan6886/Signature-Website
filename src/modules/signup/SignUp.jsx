import React from "react";
import "./SignUp.scss";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Facebookicon, Googleicon, Appleicon, HeaderImg } from "../../assets";

const SignUp = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    password: Yup.string(),
  });
  return (
    <>
      <div className="signup-container">
        <div className="signup-container-content">
          <div className="signup-container-content-left">
            <h1>Sign up</h1>
            <div className="signup-container-content-left-content">
              {/* <div className="signup-container-content-left-content"></div> */}
              <Formik
                initialValues={{
                  email: "",
                  name: "",
                  password: "",
                  confirmPssword: "",
                }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    <Form>
                      <FormInput
                        label="Name"
                        name="name"
                        type="text"
                        place="Adam"
                      />
                      <FormInput
                        label="Email"
                        name="email"
                        type="email"
                        place="example@email.com"
                      />
                      <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        place="********"
                      />
                      <FormInput
                        label="Confirm Password"
                        name="confirm"
                        type="password"
                        place="********"
                      />
                      <button className="signup-container-content-left-content-btn">
                        Sign up
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
              <p>
                Don’t have account? <span>Create new account</span>
              </p>
              <div className="signup-container-content-left-content-continue">
                <hr />
                <p>or continue with</p>
                <hr />
              </div>
              <button>
                <Link to="/signin" className="googlelink">
                  <img src={Googleicon} alt="google" />
                  <p>Continue with google</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="signup-container-content-right">
            {/* <img src={HeaderImg} alt="HeaderImg" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
