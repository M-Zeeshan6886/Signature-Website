import React from "react";
import "./CreateSignature.scss";
import { Navbar } from "../../components/Common Components";
import {
  Scard1,
  Scard10,
  Scard11,
  Scard12,
  Scard13,
  Scard14,
  Scard15,
  Scard2,
  Scard3,
  Scard4,
  Scard5,
  Scard6,
  Scard7,
  Scard8,
  Scard9,
} from "../../components";
import { Sc4profile1, Sc4profile2, Sc4profile3 } from "../../assets";
import { Link } from "react-router-dom";
// import Scard2 from '../../components/SignatureCards/SCard2/Scard2';

const CreateSignature = () => {
  return (
    <>
      <Navbar />
      <div className="createsignature-container">
        <h3>Let's create your first signature! Choose design that you like</h3>
        <div className="createsignature-container-innercontainer">
          <div className="createsignature-container-innercontainer-content">
            <div className="createsignature-container-innercontainer-content-col1">
              <Link to="/editecard">
                <Scard1 />
              </Link>
              <Scard2 />
              <Scard3 />
              <Scard8 />
              <Scard10 />
              <Scard12 />
            </div>
            <div className="createsignature-container-innercontainer-content-col2">
              <Scard4
                Profileimg={Sc4profile1}
                Name="Paige Loewe"
                NA="Sales and Marketing Specialist at armyspy.com"
                PN="+3 947 3135 8383"
                email="MarjorieJHart@armyspy.com"
                website="armyspy.com"
                skype="marjorie"
              />
              <Scard5 />
              <Scard4
                Profileimg={Sc4profile2}
                Name="Marjorie J. Hart"
                NA="Sales and Marketing Specialist at armyspy.com"
                PN="+3 947 3135 8383"
                email="MarjorieJHart@armyspy.com"
                website="armyspy.com"
                skype="marjorie"
              />
              <Scard7 />
              <Scard14 />
              <Scard15 />
            </div>
            <div className="createsignature-container-innercontainer-content-col3">
              <Scard6 />
              <Scard4
                Profileimg={Sc4profile3}
                Name="Jasmine Catalan"
                NA="Sales and Marketing Specialist at pnyrig"
                PN="859-547-3455"
                email="JasmineC@pnyrig.com"
                website="pnyrig.com"
                skype="JasmineCatalan"
              />
              <Scard9 />
              <Scard11 />
              <Scard13 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSignature;
