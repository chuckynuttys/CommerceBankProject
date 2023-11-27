import React from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './Entry.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import NavBar from "../../Components/NavBar";
import EntryPageComponent from "../../Components/EntryPageComponent";
import { useNavigate } from 'react-router-dom';
var navBarNumber;

const Entry = () => {
  let x = 0;
  const navigate = useNavigate();
  const execute = (x) => {
      if (x == true)
        navigate("/Review");
  }
  return (
    <div>
    <NavBar navBarNumber={1}/>
          <div className="menu">
             <h1> <img className = "logo" src={logo} alt="logo" /> </h1>
             <h2>Change Request Form</h2>
             <EntryPageComponent execute={execute}/>
          </div>
          </div>
  );
};
export default Entry;
