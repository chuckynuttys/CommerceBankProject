import React from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './Entry.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
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
             <EntryPageComponent execute={execute}/>
    </div>
  );
};
export default Entry;
