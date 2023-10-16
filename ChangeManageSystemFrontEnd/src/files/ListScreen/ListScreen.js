import React, { Component } from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './ListScreen.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import ListRequestComponent from "../../Components/ListRequest";
class ListScreenApp extends Component { 
  render() {
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
        <div id="u494_div" class=""></div>
        <div id="u494_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u495" class="ax_default button">
        <div id="u495_div" class=""></div>
        <div id="u495_text" class="text ">
          <p><span>Submit Request</span></p>
        </div>
      </div>

      
      <div id="u496" class="ax_default button">
        <div id="u496_div" class=""></div>
        <div id="u496_text" class="text ">
          <p><span>Log out</span></p>
        </div>
      </div>

      
      <div id="u497" class="ax_default button">
        <div id="u497_div" class=""></div>
        <div id="u497_text" class="text ">
          <p><span>View Change Request Archive</span></p>
        </div>
      </div>

      
      <div id="u498" class="ax_default box_2">
        <div id="u498_div" class=""></div>
        <div id="u498_text" class="text " style={{display: 'none', visibility: 'hidden'}}>
          <p></p>
        </div>
      </div>

      
      <div id="u499" class="ax_default button">
        <div id="u499_div" class=""></div>
        <div id="u499_text" class="text ">
          <p><span>View Change Requests</span></p>
        </div>
      </div>

      
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

          
          <div id="u506" class="ax_default box_3" data-label="Tab Label 2" selectiongroup="Tabs">
            <div id="u506_div" class=""></div>
            <div id="u506_text" class="text ">
              <p><span>Tab 2</span></p>
            </div>
          </div>

          
          <div id="u507" class="ax_default box_3 selected" data-label="Tab Label 1" selectiongroup="Tabs">
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
                  <p><span>Change_Number</span></p>
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
              
              <ListRequestComponent/>
              
              <div id="u532" class="ax_default box_1" data-label="Action (Header)">
                <div id="u532_div" class=""></div>
                <div id="u532_text" class="text ">
                  <p><span>Action</span></p>
                </div>
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

              
              <div id="u545" class="ax_default" data-label="Table Repeater">
                <script id="u545_script" type="axure-repeater-template" data-label="Table Repeater">

                  
                  <div id="u546" class="ax_default box_1 u546" data-label="Window_Start_Date">
                    <div id="u546_div" class="u546_div"></div>
                    <div id="u546_text" class="text u546_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u547" class="ax_default box_1 u547" data-label="Change_Number">
                    <div id="u547_div" class="u547_div"></div>
                    <div id="u547_text" class="text u547_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u548" class="ax_default box_1 u548" data-label="Window_Start_Time">
                    <div id="u548_div" class="u548_div"></div>
                    <div id="u548_text" class="text u548_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u549" class="ax_default box_1 u549" data-label="Window_Stop_Date">
                    <div id="u549_div" class="u549_div"></div>
                    <div id="u549_text" class="text u549_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u550" class="ax_default box_1 u550" data-label="Window_Stop_Time">
                    <div id="u550_div" class="u550_div"></div>
                    <div id="u550_text" class="text u550_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u551" class="ax_default box_1 u551" data-label="Backout_Plan">
                    <div id="u551_div" class="u551_div"></div>
                    <div id="u551_text" class="text u551_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u552" class="ax_default box_1 u552" data-label="Backout_Minutes">
                    <div id="u552_div" class="u552_div"></div>
                    <div id="u552_text" class="text u552_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u553" class="ax_default box_1 u553" data-label="Other_Needed_Departments">
                    <div id="u553_div" class="u553_div"></div>
                    <div id="u553_text" class="text u553_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u554" class="ax_default box_1 u554" data-label="Risk_Level">
                    <div id="u554_div" class="u554_div"></div>
                    <div id="u554_text" class="text u554_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u555" class="ax_default box_1 u555" data-label="State">
                    <div id="u555_div" class="u555_div"></div>
                    <div id="u555_text" class="text u555_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u556" class="ax_default box_1 u556" data-label="Action">
                    <div id="u556_div" class="u556_div"></div>
                    <div id="u556_text" class="text u556_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>
                </script>
                <div id="u545-1" class="preeval" style={{width: '1312px', height: '30px'}}>

                  
                  <div id="u546-1" class="ax_default box_1 u546" data-label="Window_Start_Date" style={{width: '120px', height: '30px', left: '119px', top: '0px', visibility: 'inherit'}}>
                    <div id="u546-1_div" class="u546_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u546-1_text" class="text u546_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u547-1" class="ax_default box_1 u547" data-label="Change_Number" style={{width: '120px', height: '30px', left: '0px', top: '0px', visibility: 'inherit'}}>
                    <div id="u547-1_div" class="u547_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u547-1_text" class="text u547_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u548-1" class="ax_default box_1 u548" data-label="Window_Start_Time" style={{width: '120px', height: '30px', left: '239px', top: '0px', visibility: 'inherit'}}>
                    <div id="u548-1_div" class="u548_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u548-1_text" class="text u548_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u549-1" class="ax_default box_1 u549" data-label="Window_Stop_Date" style={{width: '120px', height: '30px', left: '359px', top: '0px', visibility: 'inherit'}}>
                    <div id="u549-1_div" class="u549_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u549-1_text" class="text u549_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u550-1" class="ax_default box_1 u550" data-label="Window_Stop_Time" style={{width: '120px', height: '30px', left: '479px', top: '0px', visibility: 'inherit'}}>
                    <div id="u550-1_div" class="u550_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u550-1_text" class="text u550_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u551-1" class="ax_default box_1 u551" data-label="Backout_Plan" style={{width: '120px', height: '30px', left: '599px', top: '0px', visibility: 'inherit'}}>
                    <div id="u551-1_div" class="u551_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u551-1_text" class="text u551_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u552-1" class="ax_default box_1 u552" data-label="Backout_Minutes" style={{width: '120px', height: '30px', left: '719px', top: '0px', visibility: 'inherit'}}>
                    <div id="u552-1_div" class="u552_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u552-1_text" class="text u552_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u553-1" class="ax_default box_1 u553" data-label="Other_Needed_Departments" style={{width: '120px', height: '30px', left: '839px', top: '0px', 
                  visibility: 'inherit'}}>
                    <div id="u553-1_div" class="u553_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u553-1_text" class="text u553_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u554-1" class="ax_default box_1 u554" data-label="Risk_Level" style={{width: '120px', height: '30px', left: '959px', top: '0px', visibility: 'inherit'}}>
                    <div id="u554-1_div" class="u554_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u554-1_text" class="text u554_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u555-1" class="ax_default box_1 u555" data-label="State" style={{width: '120px', height: '30px', left: '1079px', top: '0px', visibility: 'inherit'}}>
                    <div id="u555-1_div" class="u555_div" style={{width: '120px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u555-1_text" class="text u555_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                    </div>
                  </div>

                  
                  <div id="u556-1" class="ax_default box_1 u556" data-label="Action" style={{width: '113px', height: '30px', left: '1199px', top: '0px', visibility: 'inherit'}}>
                    <div id="u556-1_div" class="u556_div" style={{width: '113px', height: '30px', visibility: 'inherit'}}></div>
                    <div id="u556-1_text" class="text u556_text" style={{display: 'none', visibility: 'hidden'}}>
                      <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListScreenApp;