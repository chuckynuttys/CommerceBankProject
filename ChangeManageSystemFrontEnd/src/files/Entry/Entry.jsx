import React from "react";
import '../../css/pages.css';
import '../../css/styles.css';
import './Entry.css';
import backgroundImg from '../../Images/BackgroundImg.jpg';
import logo from '../../Images/Logo.png';
import NavBar from "../../Components/NavBar";
const Entry = () => {
  return (
    
      <form> 
          <div className="menu">
             <h1> <img className = "logo" src={logo} alt="logo" /> </h1>
             <h2>Change Request Form</h2>
             <fieldset className="fs1">
              <label className= "labelInput" htmlFor="aId">
              <input className="inputLabelTopPage" id="aId" name = "aID" rows="9" cols="50" placeholder="Application ID" />
              <p className = "button">Three character ID of the application team implementing the change</p>
              </label>
              <label className= "labelInput" htmlFor="descr">
              <textarea rows="3" cols="30" placeholder="Description" id="descr"></textarea>
              <p className = "button">80 Character description of what the change is</p>
              </label>
              <label className= "labelInput"  htmlFor="why">
             <textarea rows="3" cols="30" placeholder="Why" id="why"></textarea>
              <p className = "button">Why is the change needed</p>
              </label>
             </fieldset>
             <fieldset className="fs2">
             <label className= "labelInput" htmlFor="whatIs">
                <input className="inputLabelTopPage" id="whatIs" name="whatIs" rows='9' cols = '50' placeholder="What is changing?" />
                <p className = "button">New version of software, server configuration changes, etc..</p>
              </label>
              <label className= "labelInput" htmlFor="backOut">
              <textarea rows="3" cols="30" placeholder="Back-Out Plan" id="backOut"></textarea>
              <p className = "button">Description of what it takes to revert the change</p>
              </label>
              <label className= "labelInput" htmlFor="backOutMins">
                <input className="inputLabelTopPage" id="backOutMins" name="backOutMins" rows='9' cols = '50' placeholder="Back-Out Minutes" />
                <p className = "button">How long will it take to perform the back-out in minutes</p>
              </label>
             </fieldset>
             <fieldset className="radioButton">
              <legend className="legendRadio">
                Reason Type 
              </legend>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="reasonType" value="Fix" id="radio" />
                <p className="radioP">Fix</p>
              </label>
              <label className="labelRadio">
                <input className="inputRadio" type = "radio" name ="reasonType" value="Enhancement"/>
                <p className="radioP">Enhancement</p>
              </label>
             </fieldset>
             <fieldset className="radioButton">
              <legend className="legendRadio">
                Change Type 
              </legend>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="changeType" value="Planned" id="planned"/>
                <p className="radioP">Planned</p>
              </label>
              <label className="labelRadio">
                <input className="inputRadio" type = "radio" name="changeType" value="Unplanned" id="unplanned"/>
                <p className="radioP">Unplanned</p>
              </label>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="changeType" value="Emergency" id="emergency"/>
                <p className="radioP">Emergency</p>
              </label>
             </fieldset>
             <fieldset className="radioButton">
              <legend className="legendRadio">
                Other Needed Departments 
              </legend>
              <div className="radioElements">
              <input className="inputCheck" type="checkbox" name ="devops" value="DevOps" id="changeTypeCheckBox"  />
              <p className="checkP">DevOps</p>
              <input className="inputCheck" type="checkbox" name="dba" value="DBA" id="dba" />
              <p className="checkP">DBA</p>
              <input className="inputCheck" type="checkbox" name="security" value="Security" id="security" />
              <p className="checkP">Security</p>
              <input className="inputCheck" type="checkbox" name="scheduling" value="Scheduling" id="scheduling" />
              <p className="checkP">DBA</p>
              </div>
             </fieldset>
             <fieldset className="doubleStyle">
              <div className="calDiv">
              <legend className="legendCal">Change Window Start Date</legend>
               <input type = "datetime-local" className="inputCalender" id ="startDateInput" / >
             </div>
             
             <div className="calDiv">
              <legend className="legendCal">Change Window Stop Date</legend>
               <input type = "datetime-local" className="inputCalender" id ="stopDateInput" / >
                </div>
              </fieldset>
             <fieldset className="Submit">
             <input type="submit" value="Submit" /> 
          
             </fieldset>
          </div>
          </form>
      
  );
};
export default Entry;
