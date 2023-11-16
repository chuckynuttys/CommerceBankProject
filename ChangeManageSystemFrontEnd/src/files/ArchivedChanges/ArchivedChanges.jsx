import React, { Component, useEffect, useState } from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './ArchivedChanges.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import NavBar from "../../Components/NavBar";
import ListChangeRequests from "../../Components/ListChangeRequests";

const AC = () => {
  const[changeRequests, setChangeRequests] = useState([]);
  var tabSet;
  var elementNumber;
  var index = 1;
  var navBarNumber;

  useEffect(()=>{
    fetch(`http://localhost:8080/changerequests?archivedStatus=true`, {method:"GET"})
    .then(res => res.json())
    .then(res => {setChangeRequests(res)})
  },[])


  return (
    <div id="base" class="">
      
      
      <div id="u557" class="ax_default image">
        <img id="u557_img" class="img " src={backgroundImg}/>
        <div id="u557_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>
      
      
      <div id="u558" class="ax_default box_3">
        <div id="u558_div" class=""></div>
        <div id="u558_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u559" class="ax_default box_3">
        <div id="u559_div" class="">
        </div>
        <div id="u559_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      <NavBar navBarNumber={4}/>
      
      <div id="u562" class="ax_default box_2">
        <div id="u562_div" class=""></div>
        <div id="u562_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u563" class="ax_default image">
        <img id="u563_img" class="img " src={logo}/>
        <div id="u563_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u564" class="ax_default" data-label="Table Repeater" style={{"overflow-x": 'hidden', height: '370px',}}>
      {changeRequests.map(changeRequest=> <ListChangeRequests key={index = index + 1} changeRequest={changeRequest} tabSet={3} index={index}/>)}
      </div>

      
      <div id="u571" class="ax_default box_1" data-label="Change Number (Header)">
        <div id="u571_div" class=""></div>
        <div id="u571_text" class="text ">
          <p><span>Change_Number</span></p>
        </div>
      </div>

      
      <div id="u572" class="ax_default box_1" data-label="Full Name (Header)">
        <div id="u572_div" class=""></div>
        <div id="u572_text" class="text ">
          <p><span>Description</span></p>
        </div>
      </div>

      
      <div id="u573" class="ax_default box_1" data-label="Application ID (Header)">
        <div id="u573_div" class=""></div>
        <div id="u573_text" class="text ">
          <p><span>State</span></p>
        </div>
      </div>

      
      <div id="u574" class="ax_default box_1" data-label="Change Number (Header)">
        <div id="u574_div" class=""></div>
        <div id="u574_text" class="text ">
          <p><span>Implementer</span></p>
        </div>
      </div>

      
      <div id="u575" class="ax_default box_1" data-label="Reason (Header)">
        <div id="u575_div" class=""></div>
        <div id="u575_text" class="text ">
          <p><span>Implementation Status</span></p>
        </div>
      </div>

      
      <div id="u576" class="ax_default box_1" data-label="Reason Number (Header)">
        <div id="u576_div" class=""></div>
        <div id="u576_text" class="text ">
          <p><span>Implementation Date and Time</span></p>
        </div>
      </div>

      
      <div id="u3" class="ax_default heading_1">
        <div id="u3_div" class=""></div>
        <div id="u3_text" class="text ">
          <p><span>Archived Change Requests</span></p>
        </div>
      </div>

      
      
    </div>
  );
};

export default AC;