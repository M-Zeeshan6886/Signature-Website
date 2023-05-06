import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import { Logo, NevProfileIcon, dropdown5 } from "../../../assets";
import ProfileDropdown from "../../profileDropdown/ProfileDropdown";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [openProfile, setOpenProfile] = useState(false);
  const dropdown = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-container-content">
          <div className="nav-container-content-left">
            <img src={Logo} alt="LogoIcon" />
          </div>
          <div className="nav-container-content-middle">
            <NavLink
              // style={NavLinkStyles}
              to="/"
              className="menubtns"
            >
              Home
            </NavLink>
            <NavLink
              // style={NavLinkStyles}
              to="/createsignature"
              className="menubtns"
            >
              {" "}
              Create your free signature
            </NavLink>
            <NavLink to="/privacy" className="menubtns">
              Privacy Policy
            </NavLink>
            <NavLink to="/contactus" className="menubtns">
              Contact us
            </NavLink>
            <NavLink to="/pricing" className="menubtns">
              Pricing
            </NavLink>
            <NavLink to="/about" className="menubtns">
              About us
            </NavLink>
          </div>
          <div className="nav-container-content-right">
            <Link to="/signin" className="loginbtn">
              Login
            </Link>

            <img
              src={NevProfileIcon}
              alt="Profile-Icon"
              className="profilebtn"
              onClick={dropdown}
            />
          </div>
        </div>
      </div>
      {openProfile ? <ProfileDropdown /> : ""}

      {/* *********************** Responsive Navbar **************************** */}
      <div className="responsive-nav">
        <div className="responsive-nav-content">
          <div className="responsive-nav-content-left">
            {sidebar ? (
              <IoMdClose className="menuIcons" onClick={showSidebar} />
            ) : (
              <IoIosMenu className="menuIcons" onClick={showSidebar} />
            )}
            <img src={Logo} alt="LogoIcon" />
          </div>
          <div className="responsive-nav-content-right">
            <Link to="/signin" className="loginbtn">
              Login
            </Link>

            <img
              src={NevProfileIcon}
              alt="Profile-Icon"
              className="profilebtn"
              onClick={dropdown}
            />
          </div>
        </div>
      </div>
      {/* *********************** Responsive Navbar Dropdown Container **************************** */}
      {sidebar ? (
        <div className="responsivedropdown-container">
          <div className="responsivedropdown-container-content">
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/" className="dropdownmenu-btn">
                Home
              </Link>
            </div>
            <hr />
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/createsignature" className="dropdownmenu-btn">
                Create your free signature
              </Link>
            </div>
            <hr />
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/privacy" className="dropdownmenu-btn">
                Privacy Policy
              </Link>
            </div>
            <hr />
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/contactus" className="dropdownmenu-btn">
                Contact Us
              </Link>
            </div>
            <hr />
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/pricing" className="dropdownmenu-btn">
                Pricing
              </Link>
            </div>
            <hr />
            <div className="responsivedropdown-container-content-section">
              <img src={dropdown5} alt="Pd-Icons" />
              <Link to="/about" className="dropdownmenu-btn">
                About Us
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;

// const NavLinkStyles = ({isActive})=>{
//     return(
//       fontWeight: isActive ? 'bold' : normal,
//     )
//   };
