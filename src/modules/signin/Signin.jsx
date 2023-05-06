import React from "react";
import "./Signin.scss";
import FormInput from "../../FormInput/FormInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Google1, Googleicon } from "../../assets";

const SignIn = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    name: Yup.string().required("Name is Required"),
    password: Yup.string(),
  });
  return (
    <>
    
      <div className="signin-container">
        <div className="signin-container-content">
          <div className="signin-container-content-left">
            <h1>Sign in</h1>
            <div className="signin-container-content-left-content">
              {/* <div className="signup-container-content-left-content"></div> */}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
              >
                {(formik) => (
                  <div>
                    <Form>
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
                        place="**************"
                      />
                      <Link to="/forgetpassword" className="forgetpass">
                        Forget password ?
                      </Link>
                      <button className="signin-container-content-left-content-btn">
                        Login
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
              <p>
                Don’t have account?{" "}
                <Link to="/signup" className="plink">
                  Create new account
                </Link>
              </p>
              <div className="signin-container-content-left-content-continue">
                <hr />
                <p>or continue with</p>
                <hr />
              </div>

              <button>
                <Link to="/" className="googlelink">
                  <img src={Googleicon} alt="google" />
                  <p>Continue with google</p>
                </Link>
              </button>
            </div>
          </div>
          <div className="signin-container-content-right"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
