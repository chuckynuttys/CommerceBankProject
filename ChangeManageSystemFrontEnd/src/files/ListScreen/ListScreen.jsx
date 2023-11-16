import React, { Component, useEffect, useState } from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './ListScreen.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import ListChangeRequests from "../../Components/ListChangeRequests";
import NavBar from "../../Components/NavBar";

const ListScreenApp = () => { 
  const[changeRequests, setChangeRequests] = useState([]);
  var tabSet;
  var elementNumber;
  var element2Number;
  var navBarNumber;
  var index = 1;

  useEffect(()=>{
    fetch(`http://localhost:8080/changerequests?archivedStatus=false`, {method:"GET"})
    .then(res => res.json())
    .then(res => {setChangeRequests(res)})
  },[])

  const handleClick = (e) => {
    
    
    if (document.getElementById("u507_div").getAttribute("class") == "" && e == "1") {
      // Tab 1
      
      document.getElementById("u507_div").setAttribute("class", "selected");
      document.getElementById("u506_div").setAttribute("class", "");
      document.getElementById("u508_state0").setAttribute("style", "visibility: visible");
      document.getElementById("u508_state1").setAttribute("style", "visibility: hidden");
    } else if (document.getElementById("u506_div").getAttribute("class") == "" && e == "2") {
      // Tab 2
      
      document.getElementById("u506_div").setAttribute("class", "selected");
      document.getElementById("u507_div").setAttribute("class", "");
      document.getElementById("u508_state1").setAttribute("style", "visibility: visible");
      document.getElementById("u508_state0").setAttribute("style", "visibility: hidden");
    }
  }
  
  

    return (
    <div id="base" class="">

      
      <div id="u492" class="ax_default image">
        <img id="u492_img" class="img " src={backgroundImg}/>
        <div id="u492_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u493" class="ax_default box_3">
        <div id="u493_div" class=""></div>
        <div id="u493_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u494" class="ax_default box_3">
        <div id="u494_div" class="">
        </div>
        <div id="u494_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>
      
      
      
      <div id="u498" class="ax_default box_2">
        <div id="u498_div" class=""></div>
        <div id="u498_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <NavBar navBarNumber={3}/>

      
      <div id="u500" class="ax_default image">
        <img id="u500_img" class="img " src={logo}/>
        <div id="u500_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u501" class="ax_default label ax_default_hidden" data-label="Updated Employee Value" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u501_div" class=""></div>
        <div id="u501_text" class="text ">
          <p><span>Label</span></p>
        </div>
      </div>

      
      <div id="u502" class="ax_default label ax_default_hidden" data-label="Change Number" style={{display: 'none', visibility: 'hidden'}}>
        <div id="u502_div" class=""></div>
        <div id="u502_text" class="text ">
          <p><span>0</span></p>
        </div>
      </div>

      
      <div id="u503" class="ax_default heading_1">
        <div id="u503_div" class=""></div>
        <div id="u503_text" class="text ">
          <p><span>Change Requests</span></p>
        </div>
      </div>

      
      <div id="u504" class="ax_default" data-label="Tabs" data-left="297" data-top="304" data-width="1316" data-height="441" layer-opacity="1">

        
        <div id="u505" class="ax_default" data-left="308" data-top="304" data-width="221" data-height="41" layer-opacity="1">

          
          <div id="u506" class="ax_default box_3" data-label="Tab Label 2" selectiongroup="Tabs" onClick={() => handleClick(2)} style={{cursor: 'pointer'}} >
            <div id="u506_div" class=""></div>
            <div id="u506_text" class="text ">
              <p><span>Tab 2</span></p>
            </div>
          </div>

          
          <div id="u507" class="ax_default box_3 selected" data-label="Tab Label 1" selectiongroup="Tabs" onClick={() => handleClick(1)} style={{cursor: 'pointer'}} >
            <div id="u507_div" class="selected"></div>
            <div id="u507_text" class="text ">
              <p><span>Tab 1</span></p>
            </div>
          </div>
        </div>

        
        <div id="u508" class="ax_default" data-label="Tab Panels">
          <div id="u508_state0" class="panel_state" data-label="State1" >
            <div id="u508_state0_content" class="panel_state_content">

              
              <div id="u510" class="ax_default box_1" data-label="Change Number (Header)">
                <div id="u510_div" class=""></div>
                <div id="u510_text" class="text ">
                  <p><span>Change Number</span></p>
                </div>
              </div>

              
              <div id="u511" class="ax_default box_1" data-label="Full Name (Header)">
                <div id="u511_div" class=""></div>
                <div id="u511_text" class="text ">
                  <p><span>Full Name</span></p>
                </div>
              </div>

              
              <div id="u512" class="ax_default box_1" data-label="Application ID (Header)">
                <div id="u512_div" class=""></div>
                <div id="u512_text" class="text ">
                  <p><span>Application ID</span></p>
                </div>
              </div>

              
              <div id="u513" class="ax_default box_1" data-label="Change Number (Header)">
                <div id="u513_div" class=""></div>
                <div id="u513_text" class="text ">
                  <p><span>Description</span></p>
                </div>
              </div>

              
              <div id="u514" class="ax_default box_1" data-label="Reason (Header)">
                <div id="u514_div" class=""></div>
                <div id="u514_text" class="text ">
                  <p><span>Reason</span></p>
                </div>
              </div>

              
              <div id="u515" class="ax_default box_1" data-label="Reason Number (Header)">
                <div id="u515_div" class=""></div>
                <div id="u515_text" class="text ">
                  <p><span>Reason Number</span></p>
                </div>
              </div>

              
              <div id="u516" class="ax_default box_1" data-label="Change Type (Header)">
                <div id="u516_div" class=""></div>
                <div id="u516_text" class="text ">
                  <p><span>Change Type</span></p>
                </div>
              </div>

              
              <div id="u517" class="ax_default box_1" data-label="Why (Header)">
                <div id="u517_div" class=""></div>
                <div id="u517_text" class="text ">
                  <p><span>Why</span></p>
                </div>
              </div>

              
              <div id="u518" class="ax_default box_1" data-label="What (Header)">
                <div id="u518_div" class=""></div>
                <div id="u518_text" class="text ">
                  <p><span>What</span></p>
                </div>
              </div>

              
              <div id="u519" class="ax_default box_1" data-label="Who (Header)">
                <div id="u519_div" class=""></div>
                <div id="u519_text" class="text ">
                  <p><span>Who</span></p>
                </div>
              </div>
              <div id="u532" class="ax_default box_1" data-label="Action (Header)">
                <div id="u532_div" class=""></div>
                <div id="u532_text" class="text ">
                  <p><span>Action</span></p>
                </div>
              </div>

              <div id="u520" class="ax_default" data-label="Table Repeater" style={{"overflow-x": 'hidden', height: '700px',}}>
              
              {changeRequests.map(changeRequest => <ListChangeRequests key={index++} changeRequest={changeRequest} tabSet={1} index={index}/>)}
              
              </div>
            </div>
          </div>
          <div id="u508_state1" class="panel_state" data-label="State2" style={{visibility: 'hidden'}}>
            <div id="u508_state1_content" class="panel_state_content">
              <div id="u534" class="ax_default box_1" data-label="Window Start Date (Header)">
                <div id="u534_div" class=""></div>
                <div id="u534_text" class="text ">
                  <p><span>Window Start Date</span></p>
                </div>
              </div>

              
              <div id="u535" class="ax_default box_1" data-label="Window Start Time (Header)">
                <div id="u535_div" class=""></div>
                <div id="u535_text" class="text ">
                  <p><span>Window Start Time</span></p>
                </div>
              </div>

              
              <div id="u536" class="ax_default box_1" data-label="Window Stop Date (Header)">
                <div id="u536_div" class=""></div>
                <div id="u536_text" class="text ">
                  <p><span>Window Stop Date</span></p>
                </div>
              </div>

              
              <div id="u537" class="ax_default box_1" data-label="Window Stop Time (Header)">
                <div id="u537_div" class=""></div>
                <div id="u537_text" class="text ">
                  <p><span>Window Stop Time</span></p>
                </div>
              </div>

              
              <div id="u538" class="ax_default box_1" data-label="Backout Plan (Header)">
                <div id="u538_div" class=""></div>
                <div id="u538_text" class="text ">
                  <p><span>Backout Plan</span></p>
                </div>
              </div>

              
              <div id="u539" class="ax_default box_1" data-label="Backout Minutes (Header)">
                <div id="u539_div" class=""></div>
                <div id="u539_text" class="text ">
                  <p><span>Backout Minutes</span></p>
                </div>
              </div>

              
              <div id="u540" class="ax_default box_1" data-label="Other Needed Departments">
                <div id="u540_div" class=""></div>
                <div id="u540_text" class="text ">
                  <p><span>Other Needed Departments</span></p>
                </div>
              </div>

              
              <div id="u541" class="ax_default box_1" data-label="Risk Level (Header)">
                <div id="u541_div" class=""></div>
                <div id="u541_text" class="text ">
                  <p><span>Risk Level</span></p>
                </div>
              </div>

              
              <div id="u542" class="ax_default box_1" data-label="Risk Level (Header)">
                <div id="u542_div" class=""></div>
                <div id="u542_text" class="text ">
                  <p><span>State</span></p>
                </div>
              </div>

              
              <div id="u543" class="ax_default box_1" data-label="Risk Level (Header)">
                <div id="u543_div" class=""></div>
                <div id="u543_text" class="text ">
                  <p><span>Action</span></p>
                </div>
              </div>

              
              <div id="u544" class="ax_default box_1" data-label="Change Number (Header)">
                <div id="u544_div" class=""></div>
                <div id="u544_text" class="text ">
                  <p><span>Change_Number</span></p>
                </div>
              </div>
              <div id="u520" class="ax_default" data-label="Table Repeater" style={{"overflow-x": 'hidden', height: '370px',}}>
              {index = 1}
              {changeRequests.map(changeRequest => <ListChangeRequests key={index++} changeRequest={changeRequest} tabSet={2} index={index}></ListChangeRequests>)}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default ListScreenApp;