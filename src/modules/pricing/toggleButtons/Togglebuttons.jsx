import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./Togglebuttons.scss";
import { Switch } from "antd";
import {
  AnimateImg,
  Appsbutton10,
  Appsbutton11,
  Appsbutton12,
  Appsbutton13,
  Appsbutton14,
  Appsbutton15,
  Appsbutton2,
  Appsbutton3,
  Appsbutton4,
  Appsbutton5,
  Appsbutton6,
  Appsbutton7,
  Appsbutton8,
  Appsbutton9,
  Appstyle,
  Checkv,
  DIcross,
  DIprofile,
  DL1,
  DL2,
  DL3,
  DL4,
  DL5,
  DL6,
  DL7,
  DL8,
  DL9,
  EYbIcon,
  EgitIcon,
  EintaIcon,
  ElinkIcon,
  FacebookIcon,
  FbIcon,
  GeneralIcon,
  Line1,
  ProImgPlace,
  Sc4profile1,
  Sc4profile2,
  Sc4profile3,
  Sicon1,
  shape1,
  shape2,
  shape3,
} from "../../../assets";
import {
  Appbutton,
  Appbuttonpro,
  Cardinputfields,
  DesignColorInput,
  DesignSelectInput,
  Pro,
  Scard1,
  Scard2,
  Scard3,
  Scard4,
  Scard5,
  Scard6,
  Scard7,
  SocialIconsfield,
  SocialInputfield,
} from "../../../components";
import { Link } from "react-router-dom";
import SocialIputfield from "../../../components/editCardInputfields/socialtextInputfield/SocialIputfield";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Box
        sx={{
          borderRadius: "22.5px",
          backgroundColor: "#2B4465",
          // height: "40px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          variant="scrollable"
          scrollButtons="auto"
          aria-label="basic tabs example"
          className="tabnav"
          TabIndicatorProps={{
            sx: { backgroundColor: "#00C5F7", width: "50%", height: "0px" },
          }}
          // sx: {
          //   backgroundColor: "#6EC4CF",
          //   height: 3,
          // }

          sx={{
            "& button": {
              // backgroundColor: "#6EC4CF",
              color: "white",
              fontSize: "1.2rem",
              borderRadius: "22.5px",
              textTransform: "capitalize",
            },
            "& button.Mui-selected": { backgroundColor: "#00C5F7" },
          }}
          textColor="white"
        >
          <Tab
            label="General"
            // <img src={GeneralIcon} alt="Icons" />
            {...a11yProps(0)}
          />
          <Tab label="Design" {...a11yProps(1)} />
          <Tab label="template" {...a11yProps(2)} />
          <Tab label="Social" {...a11yProps(3)} />
          <Tab label="Apps" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {/* ******************** General Tab Start ************************ */}
      <TabPanel value={value} index={0}>
        <div className="gen-container">
          <h1>Enter your signature details</h1>
          <div className="gen-container-content">
            <div className="gen-container-content-rw1">
              <div className="gen-container-content-rw1-left">
                <Cardinputfields inputlable="First Name" inputph="John" />
                <Cardinputfields inputlable="Last Name" inputph="wick" />
              </div>
              <div className="gen-container-content-rw1-right">
                <img src={ProImgPlace} alt="profileImg" />
                <img src={AnimateImg} alt="profileImg" />
              </div>
            </div>
            <div className="gen-container-content-rw2">
              <Cardinputfields inputlable="Title" inputph="Actor" />
              <Cardinputfields inputlable="Company" inputph="Film industry" />
              <Cardinputfields inputlable="Website URL" inputph="Actor" />
              <Cardinputfields
                inputlable="Email Address"
                inputph="John@example.com"
              />
              <Cardinputfields
                inputlable="Address"
                inputph="32 3rd Area, new york"
              />
            </div>
          </div>
          <div className="gen-container-content2">
            <h1>Enter your social links</h1>
            <SocialInputfield
              sociallable="Facebook"
              socailicon={FbIcon}
              socialplaceholder="https:www.facebook.com/john"
            />
            <SocialInputfield
              sociallable="Youtube"
              socailicon={EYbIcon}
              socialplaceholder="https:www.youtube.com/john"
            />
            <SocialInputfield
              sociallable="Instagram"
              socailicon={EintaIcon}
              socialplaceholder="https:www.instagram.com/john"
            />
            <SocialInputfield
              sociallable="Linked in"
              socailicon={ElinkIcon}
              socialplaceholder="https:www.linkedin.com/john"
            />
            <SocialInputfield
              sociallable="GitHub"
              socailicon={EgitIcon}
              socialplaceholder="https:www.github.com/john"
            />
          </div>
        </div>
      </TabPanel>
      {/* ******************** Design Tab Start ************************ */}
      <TabPanel value={value} index={1}>
        <div className="box-container-r1">
          <div className="design-container">
            <h1>Enhance your style</h1>
            <div className="design-container-content-rw1">
              <DesignSelectInput
                selectlabel="Font Family"
                selectlabel2="Font Size"
              />
              <DesignColorInput dclabel="Template" dctextlabel2="Text color" />
            </div>
          </div>
        </div>
        <div className="design-container-content-rw2">
          <h1>Social media</h1>
          <div className="design-container-content-rw2-items">
            <p>Shape</p>
            <div className="design-container-content-rw2-items-list">
              <img src={shape1} alt="imgesshape" />
              <img src={shape2} alt="imgesshape" />
              <img src={shape3} alt="imgesshape" />
            </div>
          </div>
          <div className="design-container-content-rw2-items">
            <p>Size</p>
            <div className="design-container-content-rw2-items-list">
              <input type="range" min="0" max="100" className="input_range" />
            </div>
          </div>
          <div className="design-container-content-rw2-items">
            <p>Icon color</p>
            <div className="design-container-content-rw2-items-list">
              <div className="IconColor"></div>
            </div>
          </div>
          <div className="design-container-content-rw2-items">
            <p>Icon Background </p>
            <div className="design-container-content-rw2-items-list">
              <div className="Iconbg"></div>
            </div>
          </div>
        </div>
        <div className="design-container-content-rw3">
          <h1>Image</h1>
          <div className="design-container-content-rw3-items">
            <div className="design-container-content-rw3-items-left">
              <img src={DIprofile} alt="pictures" />
              <img src={DIcross} alt="pictures" className="dicross-icon" />
            </div>
            <div className="design-container-content-rw3-items-right">
              <p>Image width</p>
              <input type="range" min="0" max="100" className="input_range" />
              <Cardinputfields
                inputlable="Image Link"
                inputph="www.xyzwebsite.com"
              />
            </div>
          </div>
        </div>
        <div className="design-container-content-rw4">
          <h1>Decoverated line</h1>
          <div className="design-container-content-rw4-items1">
            <p>Style</p>
            <select>
              <option>
                <p>None</p>
              </option>
              <option>
                <img src={Line1} alt="Line" />
                <p>Slim</p>
              </option>
              <option>
                <img src={Line1} alt="Line" />
                <p>Normul</p>
              </option>
              <option>
                <img src={Line1} alt="Line" />
                <p>Heavy</p>
              </option>
              <option>
                <img src={Line1} alt="Line" />
                <p>Dashed</p>
              </option>
              <option>
                <img src={Line1} alt="Line" />
                <p>Doted</p>
              </option>
            </select>
          </div>
          <div className="design-container-content-rw4-items2">
            <p>Color</p>
            <div className="design-container-content-rw4-items2-colorbox"></div>
          </div>
          <div className="design-container-content-rw4-items3">
            <p>Match with template</p>
            <Switch />
          </div>
        </div>
      </TabPanel>
      {/* ******************** Template Tab Start ************************ */}
      <TabPanel value={value} index={2}>
        <div className="box-container-r1">
          <div className="temp-container">
            <h1>Choose template</h1>
            <div className="temp-container-content">
              <Scard1 />
              <Scard6 />
              <Scard4
                Profileimg={Sc4profile1}
                Name="Paige Loewe"
                NA="Sales and Marketing Specialist at armyspy.com"
                PN="+3 947 3135 8383"
                email="MarjorieJHart@armyspy.com"
                website="armyspy.com"
                skype="marjorie"
              />
              <Scard4
                Profileimg={Sc4profile3}
                Name="Jasmine Catalan"
                NA="Sales and Marketing Specialist at pnyrig"
                PN="859-547-3455"
                email="JasmineC@pnyrig.com"
                website="pnyrig.com"
                skype="JasmineCatalan"
              />
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
            </div>
            <div className="temp-container-btn">
              <Link to="/createsignature" className="temp-container-btn-button">
                View all
              </Link>
            </div>
          </div>
        </div>
      </TabPanel>
      {/* ******************** Social Tab Start ************************ */}
      <TabPanel value={value} index={3}>
        <div className="social-container">
          <h1>Added Social icons</h1>
          <div className="social-container-content">
            <SocialIputfield
              sociallable="Facebook"
              socailicon={FbIcon}
              socialplaceholder="https:www.facebook.com/john"
            />
            <SocialIputfield
              sociallable="Youtube"
              socailicon={EYbIcon}
              socialplaceholder="https:www.youtube.com/john"
            />
            <SocialIputfield
              sociallable="Instagram"
              socailicon={EintaIcon}
              socialplaceholder="https:www.instagram.com/john"
            />
            <SocialIputfield
              sociallable="Linkedin"
              socailicon={ElinkIcon}
              socialplaceholder="https:www.linkedin.com/john"
            />
            <SocialIputfield
              sociallable="GitHub"
              socailicon={EgitIcon}
              socialplaceholder="https:www.github.com/john"
            />
          </div>
          <div className="social-container-btn">
            <button>Veiw all</button>
          </div>
        </div>
        <SocialIconsfield />
      </TabPanel>
      {/* ******************** App Tab Start ************************ */}
      <TabPanel value={value} index={4}>
        <div className="app-container">
          <h1>Enhance your signature</h1>
          <div className="app-container-content">
            <div className="app-container-content-left">
              <Appbutton appbuttonicon={Appstyle} appbuttonlabel="Style" />
              <Appbutton appbuttonicon={Appsbutton2} appbuttonlabel="Quote" />
              <Appbutton
                appbuttonicon={Appsbutton3}
                appbuttonlabel="Social buttons"
              />
            </div>
            <div className="app-container-content-right">
              <Appbutton
                appbuttonicon={Appsbutton4}
                appbuttonlabel="Image gallery"
              />
              <Appbuttonpro
                appbuttonicon={Appsbutton5}
                appbuttonlabel="Video"
              />
              <Appbuttonpro appbuttonicon={Appsbutton6} appbuttonlabel="html" />
            </div>
          </div>
        </div>
        <div className="app-container">
          <h1>Call to action</h1>
          <div className="app-container-content">
            <div className="app-container-content-left">
              <Appbutton
                appbuttonicon={Appsbutton7}
                appbuttonlabel="Online scheduler"
              />
              <Appbutton
                appbuttonicon={Appsbutton8}
                appbuttonlabel="Give feedback"
              />
              <Appbuttonpro
                appbuttonicon={Appsbutton9}
                appbuttonlabel="Social buttons"
              />
              <Appbutton
                appbuttonicon={Appsbutton10}
                appbuttonlabel="Custom buttons"
              />
              <Appbutton
                appbuttonicon={Appsbutton11}
                appbuttonlabel="Join newsletter"
              />
            </div>
            <div className="app-container-content-right">
              <Appbutton
                appbuttonicon={Appsbutton12}
                appbuttonlabel="Online payments"
              />
              <Appbutton
                appbuttonicon={Appsbutton13}
                appbuttonlabel="Upload my banner"
              />
              <Appbuttonpro appbuttonicon={Appsbutton6} appbuttonlabel="html" />
              <Appbuttonpro
                appbuttonicon={Appsbutton14}
                appbuttonlabel="Sales event"
              />
              <Appbutton
                appbuttonicon={Appsbutton15}
                appbuttonlabel="Join a webinar"
              />
            </div>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
