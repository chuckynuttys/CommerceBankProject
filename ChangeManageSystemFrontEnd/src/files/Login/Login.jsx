import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/pages.css";
import "../../css/styles.css";
import "./Login.css";
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import LoginComponent from "../../Components/LoginComponent";


const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = (t) => {
    if (t == true) {
      navigate("/Entry");
    }
  };


  return (
    <div>
      <div id="base" className="">

        <div id="u0" className="ax_default image">
          <img id="u0_img" className="img " src={backgroundImg} />
          <div id="u0_text" className="text ">
            <p></p>
          </div>
        </div>

        <div id="u1" className="ax_default box_2">
          <div id="u1_div" className=""></div>
          <div id="u1_text" className="text ">
            <p></p>
          </div>
        </div>

        <div id="u2" className="ax_default box_3">
          <div id="u2_div" className=""></div>
          <div id="u2_text" className="text ">
            <p></p>
          </div>
        </div>

        <div id="u3" className="ax_default heading_1">
          <div id="u3_div" className=""></div>
          <div id="u3_text" className="text ">
            <p><span>Log In to Change Request System</span></p>
          </div>
        </div>

        <div id="u4" className="ax_default image">
          <img id="u4_img" className="img " src={logo} />
          <div id="u4_text" className="text ">
            <p></p>
          </div>
        </div>

        <LoginComponent handleSignIn={handleSignIn} />

        {/* Upper Label UserID */}
        <div id="u7" className="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u7_div" className="selected"></div>
          <div id="u7_text" className="text ">
            <p><span>UserID</span></p>
          </div>
        </div>

        {/* Upper Label Password */}
        <div id="u11" className="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u11_div" className="selected"></div>
          <div id="u11_text" className="text ">
            <p><span>Password</span></p>
          </div>
        </div>

        <div id="u14" className="ax_default paragraph ax_default_hidden" data-label="Password Required" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u14_div" className=""></div>
          <div id="u14_text" className="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>

        <div id="u15" className="ax_default paragraph ax_default_hidden" data-label="Invalid Password" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u15_div" className=""></div>
          <div id="u15_text" className="text ">
            <p><span>Invalid Password</span></p>
          </div>
        </div>

        <div id="u16" className="ax_default paragraph ax_default_hidden" data-label="UserID Required" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u16_div" className=""></div>
          <div id="u16_text" className="text ">
            <p><span>This field is required.</span></p>
          </div>
        </div>

        <div id="u17" className="ax_default paragraph ax_default_hidden" data-label="Invalid UserID" style={{ display: 'none', visibility: 'hidden' }}>
          <div id="u17_div" className=""></div>
          <div id="u17_text" className="text ">
            <p><span>Invalid UserID or Password</span></p>
          </div>
        </div>
      </div>
      <script src="resources/scripts/axure/ios.js"></script>
    </div>
  );
};

export default Login;

