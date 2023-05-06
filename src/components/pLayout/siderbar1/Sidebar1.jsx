import React, { useState } from "react";
import "./Sidebar1.scss";
import { motion } from "framer-motion";
import {
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineLogout,
} from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { BsBuildings } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { psection7, psection8 } from "../../../assets";

const Sidebar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [active, setActive] = useState(window.location.pathname);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="sidebar1">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "60px",
            // width: "200px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
        >
          <div className="sidebar1-container">
            <div className="sidebar1-container-content">
              <div className="sidebar1-container-content-menusection">
                <div className="sidebar1-container-content-menusection-items">
                  {isOpen && <img src={psection8} alt="Icons" />}
                  {isOpen && <h1>Setting</h1>}
                </div>
                <div className="sidebar1-container-content-menusection-innersection">
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <AiOutlineHome className="img" />
                    {isOpen && <h1>Home</h1>}
                  </div>
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <SlPeople className="img" />
                    {isOpen && <h1>Personal details</h1>}
                  </div>
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <BsBuildings className="img" />
                    {isOpen && <h1>Company details</h1>}
                  </div>
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <AiOutlineLineChart className="img" />
                    {isOpen && <h1>Analytics</h1>}
                  </div>
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <TfiWorld className="img" />
                    {isOpen && <h1>Domain</h1>}
                  </div>
                  <div
                    className={
                      isOpen
                        ? "sidebar1-container-content-menusection-innersection-items"
                        : "responsive-items"
                    }
                  >
                    <AiOutlineLogout className="img" />
                    {isOpen && <h1>Logout</h1>}
                  </div>
                </div>
              </div>
              <img src={psection7} alt="Icons" onClick={toggle} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar1;
