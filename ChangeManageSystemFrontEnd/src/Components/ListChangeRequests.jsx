import React, { Component } from 'react';
import ActionComponent from './ActionComponent';

const userid = document.cookie;
var page = 1;

function ListChangeRequests(props) {
    const {changeId, applicationId, description, reason, reasonNumber, changeType, whyDescription, whatDescription, backOutPlan, backOutMinutes,
           changeWindowStartDate, changeWindowStopDate, changeWindowStartTime, changeWindowStopTime, otherNeededDepartments, riskLevel, implementer,
           implementationStatus, implementationDate, implementationTime, stateLevel, archivedStatus, } = props.changeRequest;
    const indexNumber = props.index;

      if(props.tabSet == 1) {
        return (
          // tab 1 of List Change Requests
          <div id="u520-1" class="preeval" style={{width: '1317px', height: '60px', top: ((indexNumber - 1) * 120) + "px"}}>
                          <div id="u521-1" class="ax_default box_1 u521" data-label="Full_Name" style={{width: '120px', height: '120px', left: '119px', top: '0px', visibility: 'inherit'}}>
                          <div id="u521-1_div" class="u521_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u521-1_text" class="text u521_text" style={{visibility: 'inherit'}}>
                          <p><span>{implementer}</span></p>
                            </div>
                          </div>
      
                          <div id="u522-1" class="ax_default box_1 u522" data-label="Change_Number" style={{width: '120px', height: '120px', left: '0px', top: '0px', visibility: 'inherit'}}>
                          <div id="u522-1_div" class="u522_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u522-1_text" class="text u522_text" style={{visibility: 'inherit'}}>
                            <p><span>{changeId}</span></p>
                            </div>
                          </div>
      
                          <div id="u523-1" class="ax_default box_1 u523" data-label="Application_ID" style={{width: '120px', height: '120px', left: '239px', top: '0px', visibility: 'inherit'}}>
                          <div id="u523-1_div" class="u523_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u523-1_text" class="text u523_text" style={{visibility: 'inherit'}}>
                            <p><span>{applicationId}</span></p>
                            </div>
                          </div>
      
                          <div id="u524-1" class="ax_default box_1 u524" data-label="Description" style={{width: '120px', height: '120px', left: '359px', top: '0px', visibility: 'inherit'}}>
                          <div id="u524-1_div" class="u524_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u524-1_text" class="text u524_text" style={{height: '90px', visibility: 'inherit'}}>
                            <p><span>{description}</span></p>
                            </div>
                          </div>
      
                          <div id="u525-1" class="ax_default box_1 u525" data-label="Reason" style={{width: '120px', height: '120px', left: '479px', top: '0px', visibility: 'inherit'}}>
                          <div id="u525-1_div" class="u525_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u525-1_text" class="text u525_text" style={{visibility: 'inherit'}}>
                            <p><span>{reason}</span></p>
                            </div>
                          </div>
      
                          <div id="u526-1" class="ax_default box_1 u526" data-label="Reason_Number" style={{width: '120px', height: '120px', left: '597', top: '0px', visibility: 'inherit'}}>
                          <div id="u526-1_div" class="u526_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u526-1_text" class="text u526_text" style={{visibility: 'inherit'}}>
                            <p><span>{reasonNumber}</span></p>
                            </div>
                          </div>
                          <div id="u527-1" class="ax_default box_1 u527" data-label="Change_Type" style={{width: '120px', height: '120px', left: '717px', top: '0px', visibility: 'inherit'}}>
                          <div id="u527-1_div" class="u527_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u527-1_text" class="text u527_text" style={{visibility: 'inherit'}}>
                            <p><span>{changeType}</span></p>
                            </div>
                          </div>
      
                          <div id="u528-1" class="ax_default box_1 u528" data-label="Why" style={{width: '120px', height: '120px', left: '837px', top: '0px', visibility: 'inherit'}}>
                          <div id="u528-1_div" class="u528_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u528-1_text" class="text u528_text" style={{visibility: 'inherit'}}>
                            <p><span>{whyDescription}</span></p>
                            </div>
                          </div>
                        
                        <div id="u529-1" class="ax_default box_1 u529" data-label="What" style={{width: '120px', height: '120px', left: '957px', top: '0px', visibility: 'inherit'}}>
                          <div id="u529-1_div" class="u529_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u529-1_text" class="text u529_text" style={{visibility: 'inherit'}}>
                            <p><span>{whatDescription}</span></p>
                            </div>
                          </div>
      
                        <div id="u530-1" class="ax_default box_1 u530" data-label="Who" style={{width: '120px', height: '120px', left: '1077px', top: '0px', visibility: 'inherit'}}>
                          <div id="u530-1_div" class="u530_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
                          <div id="u530-1_text" class="text u530_text" style={{visibility: 'inherit'}}>
                            <p><span>{implementer}</span></p>
                            </div>
                          </div>
                        
                        <ActionComponent stateLevel={stateLevel}/>
                        
                        </div>
        );
      } else if(props.tabSet == 2) {
        // tab 2 of List Change Requests
        return (
        <div id="u545-1" class="preeval" style={{width: '1312px', height: '30px', top: ((indexNumber - 1) * 120) + "px"}}>

          <div id="u546-1" class="ax_default box_1 u546" data-label="Window_Start_Date" style={{width: '120px', height: '120px', left: '119px', top: '0px', visibility: 'inherit'}}>
            <div id="u546-1_div" class="u546_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u546-1_text" class="text u546_text" style={{visibility: 'inherit'}}>
              <p>{changeWindowStartDate}</p>
            </div>
          </div>

          <div id="u547-1" class="ax_default box_1 u547" data-label="Change_Number" style={{width: '120px', height: '120px', left: '0px', top: '0px', visibility: 'inherit'}}>
            <div id="u547-1_div" class="u547_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u547-1_text" class="text u547_text" style={{visibility: 'inherit'}}>
              <p>{changeId}</p>
            </div>
          </div>

          <div id="u548-1" class="ax_default box_1 u548" data-label="Window_Start_Time" style={{width: '120px', height: '120px', left: '239px', top: '0px', visibility: 'inherit'}}>
            <div id="u548-1_div" class="u548_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u548-1_text" class="text u548_text" style={{visibility: 'inherit'}}>
              <p>{changeWindowStartTime}</p>
            </div>
          </div>

          <div id="u549-1" class="ax_default box_1 u549" data-label="Window_Stop_Date" style={{width: '120px', height: '120px', left: '359px', top: '0px', visibility: 'inherit'}}>
            <div id="u549-1_div" class="u549_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u549-1_text" class="text u549_text" style={{visibility: 'inherit'}}>
              <p>{changeWindowStopDate}</p>
            </div>
          </div>

          <div id="u550-1" class="ax_default box_1 u550" data-label="Window_Stop_Time" style={{width: '120px', height: '120px', left: '479px', top: '0px', visibility: 'inherit'}}>
            <div id="u550-1_div" class="u550_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u550-1_text" class="text u550_text" style={{visibility: 'inherit'}}>
              <p>{changeWindowStopTime}</p>
            </div>
          </div>

          <div id="u551-1" class="ax_default box_1 u551" data-label="Backout_Plan" style={{width: '120px', height: '120px', left: '599px', top: '0px', visibility: 'inherit'}}>
            <div id="u551-1_div" class="u551_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u551-1_text" class="text u551_text" style={{visibility: 'inherit'}}>
              <p>{backOutPlan}</p>
            </div>
          </div>

          <div id="u552-1" class="ax_default box_1 u552" data-label="Backout_Minutes" style={{width: '120px', height: '120px', left: '719px', top: '0px', visibility: 'inherit'}}>
            <div id="u552-1_div" class="u552_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u552-1_text" class="text u552_text" style={{visibility: 'inherit'}}>
              <p>{backOutMinutes}</p>
            </div>
          </div>

          <div id="u553-1" class="ax_default box_1 u553" data-label="Other_Needed_Departments" style={{width: '120px', height: '120px', left: '839px', top: '0px', visibility: 'inherit'}}>
            <div id="u553-1_div" class="u553_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u553-1_text" class="text u553_text" style={{visibility: 'inherit'}}>
              <p>{otherNeededDepartments}</p>
            </div>
            </div>

          <div id="u554-1" class="ax_default box_1 u554" data-label="Risk_Level" style={{width: '120px', height: '120px', left: '959px', top: '0px', visibility: 'inherit'}}>
            <div id="u554-1_div" class="u554_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u554-1_text" class="text u554_text" style={{visibility: 'inherit'}}>
              <p>{riskLevel}</p>
            </div>
          </div>
          
          <div id="u555-1" class="ax_default box_1 u555" data-label="State" style={{width: '120px', height: '120px', left: '1079px', top: '0px', visibility: 'inherit'}}>
            <div id="u555-1_div" class="u555_div" style={{width: '120px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u555-1_text" class="text u555_text" style={{visibility: 'inherit'}}>
              <p>{stateLevel}</p>
            </div>
          </div>

          <div id="u556-1" class="ax_default box_1 u556" data-label="Action" style={{width: '113px', height: '120px', left: '1199px', top: '0px', visibility: 'inherit'}}>
            <div id="u556-1_div" class="u556_div" style={{width: '113px', height: '120px', visibility: 'inherit'}}></div>
            <div id="u556-1_text" class="text u556_text" style={{visibility: 'inherit'}}>
              <p></p>
            </div>
          </div>

        </div>
        )
      } else {
        // Archived Change Requests
        if (implementationStatus == "Implemented") {
          return (
            <div id="u564-1" class="preeval" style={{width: '720px', height: '75px', top: ((indexNumber - 1) * 75) + "px"}}>
  
            
            <div id="u565-1" class="ax_default box_1 u565" style={{width: '212px', height: '60px', left: '120px', top: '0px', visibility: 'inherit'}}>
              <div id="u565-1_div" class="u565_div" style={{width: '216px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u565-1_text" class="text u565_text" style={{visibility: 'inherit'}}>
                <p><span>{description}</span></p>
              </div>
            </div>
  
            
            <div id="u566-1" class="ax_default box_1 u566" style={{width: '120px', height: '60px', left: '0px', top: '0px', visibility: 'inherit'}}>
              <div id="u566-1_div" class="u566_div" style={{width: '116px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u566-1_text" class="text u566_text" style={{visibility: 'inherit'}}>
                <p><span>{changeId}</span></p>
              </div>
            </div>
  
            
            <div id="u567-1" class="ax_default box_1 u567" style={{width: '120ps', height: '60px', left: '465px', top: '0px', visibility: 'inherit'}}>
              <div id="u567-1_div" class="u567_div" style={{width: '133px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u567-1_text" class="text u567_text" style={{visibility: 'inherit'}}>
                <p><span>{implementer}</span></p>
              </div>
            </div>
  
            
            <div id="u568-1" class="ax_default box_1 u568" style={{width: '120px', height: '60px', left: '340px', top: '0px', visibility: 'inherit'}}>
              <div id="u568-1_div" class="u568_div" style={{width: '120px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u568-1_text" class="text u568_text" style={{visibility: 'inherit'}}>
                <p><span>{stateLevel}</span></p>
              </div>
            </div>
  
            
            <div id="u569-1" class="ax_default box_1 u569" style={{width: '120px', height: '60px', left: '600px', top: '0px', visibility: 'inherit'}}>
              <div id="u569-1_div" class="u569_div" style={{width: '207px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u569-1_text" class="text u569_text" style={{visibility: 'inherit'}}>
                <p><span>{implementationStatus}</span></p>
              </div>
            </div>
            
            <div id="u570-1" class="ax_default box_1 u570" style={{width: '224px', height: '60px', left: '811px', top: '0px', visibility: 'inherit'}}>
              <div id="u570-1_div" class="u570_div" style={{width: '224px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u570-1_text" class="text u570_text" style={{visibility: 'inherit'}}>
                <p><span>{implementationDate} at {implementationTime}</span></p>
              </div>
            </div>
          </div>
          )
        } else {
          return (
            <div id="u564-1" class="preeval" style={{width: '720px', height: '75px', top: ((indexNumber - 1) * 75) + "px"}}>
  
            
            <div id="u565-1" class="ax_default box_1 u565" style={{width: '212px', height: '60px', left: '120px', top: '0px', visibility: 'inherit'}}>
              <div id="u565-1_div" class="u565_div" style={{width: '216px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u565-1_text" class="text u565_text" style={{visibility: 'inherit'}}>
                <p><span>{description}</span></p>
              </div>
            </div>
  
            
            <div id="u566-1" class="ax_default box_1 u566" style={{width: '120px', height: '60px', left: '0px', top: '0px', visibility: 'inherit'}}>
              <div id="u566-1_div" class="u566_div" style={{width: '116px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u566-1_text" class="text u566_text" style={{visibility: 'inherit'}}>
                <p><span>{changeId}</span></p>
              </div>
            </div>
  
            
            <div id="u567-1" class="ax_default box_1 u567" style={{width: '120ps', height: '60px', left: '465px', top: '0px', visibility: 'inherit'}}>
              <div id="u567-1_div" class="u567_div" style={{width: '133px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u567-1_text" class="text u567_text" style={{visibility: 'inherit'}}>
                <p><span>{implementer}</span></p>
              </div>
            </div>
  
            
            <div id="u568-1" class="ax_default box_1 u568" style={{width: '120px', height: '60px', left: '340px', top: '0px', visibility: 'inherit'}}>
              <div id="u568-1_div" class="u568_div" style={{width: '120px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u568-1_text" class="text u568_text" style={{visibility: 'inherit'}}>
                <p><span>{stateLevel}</span></p>
              </div>
            </div>
  
            
            <div id="u569-1" class="ax_default box_1 u569" style={{width: '120px', height: '60px', left: '600px', top: '0px', visibility: 'inherit'}}>
              <div id="u569-1_div" class="u569_div" style={{width: '207px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u569-1_text" class="text u569_text" style={{visibility: 'inherit'}}>
                <p><span>{implementationStatus}</span></p>
              </div>
            </div>
            
            <div id="u570-1" class="ax_default box_1 u570" style={{width: '224px', height: '60px', left: '811px', top: '0px', visibility: 'inherit'}}>
              <div id="u570-1_div" class="u570_div" style={{width: '224px', height: '60px', visibility: 'inherit'}}></div>
              <div id="u570-1_text" class="text u570_text" style={{visibility: 'inherit'}}>
                <p><span>N/A</span></p>
              </div>
            </div>
          </div>
          )
        }
        
      }
  
}

export default ListChangeRequests;