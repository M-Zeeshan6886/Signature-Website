import React from "react";
import "./Privacy.scss";
import { Footer, Navbar } from "../../components/Common Components";

const Privacy = () => {
  return (
    <>
      <Navbar />
      <div className="privacy-container">
        <h1>Our Privacy Policy</h1>
        <p>Last Revised: August 23, 2022</p>
        <div className="privacy-container-content">
          <p>
            We, vcita Inc. and our subsidiaries and affiliates (including,
            without limitations, under the brands WiseStamp or Wisebrand) (“we”,
            “us”, “our” or “vcita”) respect the privacy of our customers
            (“Customers”), our Customers’ clients (“Clients”) and of any user of
            our websites and other services including job applicants and alike
            (together with Customers and Clients, “Users” or “you”). This
            privacy policy (“Privacy Policy”) applies to all Users and to all
            our services including our websites (www.weba.com, www.website..com,
            https://www.businessuneeb.io/en-US/ and any subdomains (together
            “Websites”), web applications (“Web Apps”), mobile applications
            (“Mobile Apps”), our App Market, our WiseStamp services and any
            related services (collectively, the “Services”).
          </p>
          <p>
            We, vcita Inc. and our subsidiaries and affiliates (including,
            without limitations, under the brands WiseStamp or Wisebrand) (“we”,
            “us”, “our” or “vcita”) respect the privacy of our customers
            (“Customers”), our Customers’ clients (“Clients”) and of any user of
            our websites and other services including job applicants and alike
            (together with Customers and Clients, “Users” or “you”). This
            privacy policy (“Privacy Policy”) applies to all Users and to all
            our services including our websites (www.weba.com, www.website..com,
            https://www.businessuneeb.io/en-US/ and any subdomains (together
            “Websites”), web applications (“Web Apps”), mobile applications
            (“Mobile Apps”), our App Market, our WiseStamp services and any
            related services (collectively, the “Services”).
          </p>
          <p>
            Please read this Privacy Policy before using any of our Services or
            providing us with any information or data. BY USING OUR WEBSITES OR
            ANY OF OUR SERVICES, YOU ARE CONSENTING TO THIS PRIVACY POLICY. If
            you do not agree to the terms of this Privacy Policy, please
            discontinue use of our Services and immediately leave our Website.
            This Privacy Policy describes the following:
          </p>
        </div>
      </div>
      <div className="privacy-container2">
        <div className="privacy-container2-content">
          <ul>
            This Privacy Policy describes the following:
            <li>information we collect</li>
            <li>How we collect information</li>
            <li>How we use Personal Information related to you</li>
            <li>Who we share Personal Information with and how</li>
            <li>Where do we hold/transfer Personal Information</li>
            <li>Client Information</li>
            <li>Third Party Links</li>
            <li>Security</li>
            <li>Job Applicants' information</li>
            <li>children's privacy</li>
            <li>cookies</li>
            <li>privacy notice for california residents</li>
            <li>Communication from vcita</li>
            <li>your rights</li>
            <li>data retention</li>
            <li>changes</li>
            <li>contacting us</li>
          </ul>
        </div>
      </div>
      <div className="privacy-container3">
        <div className="privacy-container3-content">
          <h1>What information we collect</h1>
          <ul>
            In order to provide you with the Services, we must collect
            information including personally identifiable data (“Personal
            Information”). The Personal Information we collect includes the
            following categories:
            <li>
              Contact information: first and last name, username, alias, mailing
              address, home/business address, email and phone number;
            </li>
            <li>
              {" "}
              Other identifying information: unique personal identifiers such as
              Social Security number, driver’s license, state identification
              card number, passport number or similar identifiers, social media
              usernames, passwords and other security information for
              authentication and access, physical characteristics or
              description, medical information or health insurance information;
              billing details, main contact persons, business needs and
              preferences; and videos and photos;{" "}
            </li>
            <li>
              Demographic information: gender, age, employment information and
              salary information;{" "}
            </li>
            <li>
              Financial Information: though we do not collect credit card or
              debit card numbers, we do collect bank account information and
              other financial information such as the four last digits of your
              credit card;transactions associated with your use of the Services,
              including the transaction ID, transaction category and type,
              merchant name, amount, currency, date, and location;
            </li>
            <li>Geolocation Data</li>
            <li>
              Internet and other electronic activity: IP address, browser type,
              search and click history; navigation within and use of our
              Websites and Services;
            </li>
            <li>
              Commercial information: products or services you offer or purchase
              using the Services;{" "}
            </li>
            <li>
              Inferences drawn from the categories described above in order to
              create customized Services to reflect your preferences,
              characteristics and behavior;
            </li>
            <li>
              free-text entry box, either as part of your account or as part of
              any use the Services while connecting with other Users. How we
              collect information
            </li>
          </ul>
        </div>
      </div>
      <div className="privacy-container4">
        <div className="privacy-container4-content">
          <h1>How We collect Information</h1>
          <p>
            We collect Personal Information you provide us from your use of the
            Services, from any interaction between you and us and from other
            sources, all as further described below:
          </p>
          <ul>
            1. Information you provide us
            <li>
              When you register as a Customer, use the Services or purchase an
              App on our App Market you will be required to provide us with
              information. To the extent applicable, such details will be
              provided by using your social network account (e.g. connecting
              your Facebook or Google account to our Services).
            </li>
            <li>
              When communicating with us through support tickets, emails and
              recorded calls you participate in.{" "}
            </li>
            <li>
              Unsolicited information you provide us through the Services or
              through any other means, for example by posting to any public
              areas and other unsolicited submissions, will be accessible to
              others and will not be treated as confidential.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
