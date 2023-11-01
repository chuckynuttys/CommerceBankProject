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
    <body>
    <div id="base" class="">

      <div id="u0" class="ax_default image">
        <img id="u0_img" class="img " src={backgroundImg}/>
        <div id="u0_text" class="text ">
          <p></p>
        </div>
      </div>

      <div id="u1" class="ax_default box_2">
        <div id="u1_div" class=""></div>
        <div id="u1_text" class="text ">
          <p></p>
        </div>
      </div>

      <div id="u2" class="ax_default box_3">
        <div id="u2_div" class=""></div>
        <div id="u2_text" class="text ">
          <p></p>
        </div>
      </div>

      <div id="u3" class="ax_default heading_1">
        <div id="u3_div" class=""></div>
        <div id="u3_text" class="text ">
          <p><span>Log In to Change Request System</span></p>
        </div>
      </div>

      <div id="u4" class="ax_default image">
        <img id="u4_img" class="img " src={logo}/>
        <div id="u4_text" class="text ">
          <p></p>
        </div>
      </div>

      <LoginComponent handleSignIn={handleSignIn}/>

      {/* Upper Label UserID */}
      <div id="u7" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u7_div" class="selected"></div>
        <div id="u7_text" class="text ">
          <p><span>UserID</span></p>
        </div>
      </div>

      {/* Upper Label Password */}
      <div id="u11" class="ax_default shape ax_default_hidden selected" data-label="Upper Label" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u11_div" class="selected"></div>
        <div id="u11_text" class="text ">
          <p><span>Password</span></p>
        </div>
      </div>

      <div id="u14" class="ax_default paragraph ax_default_hidden" data-label="Password Required" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u14_div" class=""></div>
        <div id="u14_text" class="text ">
          <p><span>This field is required.</span></p>
        </div>
      </div>

      <div id="u15" class="ax_default paragraph ax_default_hidden" data-label="Invalid Password" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u15_div" class=""></div>
        <div id="u15_text" class="text ">
          <p><span>Invalid Password</span></p>
        </div>
      </div>

      <div id="u16" class="ax_default paragraph ax_default_hidden" data-label="UserID Required" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u16_div" class=""></div>
        <div id="u16_text" class="text ">
          <p><span>This field is required.</span></p>
        </div>
      </div>

      <div id="u17" class="ax_default paragraph ax_default_hidden" data-label="Invalid UserID" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u17_div" class=""></div>
        <div id="u17_text" class="text ">
          <p><span>Invalid UserID.</span></p>
        </div>
      </div>
    </div>
    <script src="resources/scripts/axure/ios.js"></script>
  </body>
  );
};

export default Login;

