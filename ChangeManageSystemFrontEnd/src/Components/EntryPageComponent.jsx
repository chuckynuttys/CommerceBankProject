import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { getCookie, deleteCookie } from "../files/Functions/CookieManagement";
import { convertDateValueToDate } from '../files/Functions/ConvertDateValueToDate';
import logo from '../Images/Logo.png';
class EntryPageComponent extends Component{
    
    constructor(values) {
       super(values)
        this.state = {
            appId:'',
            description:'',
            reasonNo:'',
            temp:'',
            whyDescription:'',
            result:'',
            username:'',
            backOutPlan:'',
            backOutMinutes:'',
            reasonType:'',
            changeType:'', 
            changeDepartment:'',
            startDate:'',
            origStart:'',
            origEnd:'',
            devOps:'',
            dba:'',
            secur:'',
            sched:'',
            startTime:'',
            stopDate:'',
            stopTime:'',
            timeOfDay:'',
            appBool:'',
            riskLevel:'',
            dontSubmit: false,
            dateIncorrect: false,
            fieldIncorrect: '',
            fieldTooLong: false,
        }
        //methods go here for declaration
        this.saveCookies = this.saveCookies.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.loadValues = this.loadValues.bind(this);
        this.manageDates = this.manageDates.bind(this);
        this.checkRadioButton = this.checkRadioButton.bind(this);
        this.formatDate = this.formatDate.bind(this);
        this.formatTime = this.formatTime.bind(this);
        this.execute = this.execute.bind(this);
        this.checkFields = this.checkFields.bind(this);
    };

    checkFields = () => {
      
      if (document.getElementById("applicationID").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("description").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("why").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("whatIsChanging").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("backOutPlan").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("backOutMinutes").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("fix").value == "" && document.getElementById("enhance").value == "")  {
        this.dontSubmit = true;
      } else if (document.getElementById("planned").value == "" && document.getElementById("unplanned").value == "" && document.getElementById("emergency").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("low").value == "" && document.getElementById("medium").value == "" && document.getElementById("high").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("changeTypeCheckBox").value == "" && document.getElementById("dba").value == "" && document.getElementById("security").value == "" 
      && document.getElementById("scheduling").value == "") {
        this.dontSubmit = true;
      } else if (document.getElementById("startDateInput").value == "") {
        this.dontSubmit = true;
      }else if (document.getElementById("stopDateInput").value == "") {
        this.dontSubmit = true;
      } else {
        this.dontSubmit = false;
      }

      if (document.getElementById("startDateInput").value >= document.getElementById("stopDateInput").value) {
        this.dateIncorrect = true;
      } else {
        this.dateIncorrect = false;
      }

      if (document.getElementById("applicationID").value.length != 3) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "Application ID must be 3 characters long.";
      } else if (document.getElementById("description").value.length > 80) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "Description must be 80 characters long or less.";
      } else if (document.getElementById("why").value.length > 80) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "Why Description must be 80 characters long or less.";
      } else if (document.getElementById("whatIsChanging").value.length > 80) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "What Is Changing Description must be 80 characters long or less.";
      } else if (document.getElementById("backOutPlan").value.length > 80) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "BackOut Plan Description must be 80 characters long or less.";
      } else if (document.getElementById("backOutMinutes").value.length > 80) {
        this.fieldTooLong = true;
        this.fieldIncorrect = "BackOut Minutes must be 80 characters long or less.";
      } else {
        
        this.fieldTooLong = false;
        this.fieldIncorrect = "";
      }
    }

    removeQuote=(x) => {
      return x.replaceAll("\"", "");
    }

    formatDate=(day, month, year, value) => {
      let newDay = convertDateValueToDate(day, "Day", null);
      let newMonth = convertDateValueToDate(month, "Month", null);
      let newYear = convertDateValueToDate(year, "Year", null);
      if (value == 1) 
        this.startDate = newMonth + " " + newDay + ", " + newYear;
      if (value == 2)
        this.stopDate = newMonth + " " + newDay + ", " + newYear;
    }

    formatTime=(hour, minute, value) => {
      let newHour = convertDateValueToDate(hour, "Hour", null);
      let newMinute = convertDateValueToDate(minute, "Minute", null);
      this.timeOfDay = getCookie("timeOfDay");
      if (value == 1) 
        this.startTime = newHour + ":" + newMinute + this.timeOfDay;
      if (value == 2)
        this.stopTime = newHour + ":" + newMinute + this.timeOfDay;
    }

    getCheckBox=(e)=> {
      this.dba = "";
      this.devOps = "";
      this.secur = "";
      this.sched = "";
      let x = false;
      let i = 1;
      //const form = document.querySelector('form');
      document.querySelectorAll('[type="checkbox"]').forEach(item => {
      if (item.checked === true) {
          if (x === false) {
             this.changeDepartment = item.value;
             x = true;
          }
          else
             this.changeDepartment = this.changeDepartment + ', ' + item.value;
          if (i == 1)
            this.devOps = item.value;
          if (i == 2)
            this.dba = item.value;
          if (i == 3)
            this.secur = item.value;
          if (i == 4)
            this.sched = item.value;
          i = i + 1;
      }
    })
  }

    manageDates=(e) => {
      this.startDate = document.getElementById("startDateInput").value;
      this.stopDate = document.getElementById("stopDateInput").value;
      console.log(document.getElementById("startDateInput").value < document.getElementById("stopDateInput").value);
      this.origStart = this.startDate;
      this.origEnd = this.stopDate;
      const startDate = new Date(this.startDate);
      const stopDate = new Date(this.stopDate);
      const startTime = new Date(this.startDate);
      const stopTime = new Date(this.stopDate);
      this.formatTime(startDate.getHours(), startDate.getMinutes(), 1);
      this.formatTime(stopDate.getHours(), stopDate.getMinutes(), 2);
      this.formatDate(startDate.getDate(), startDate.getMonth(), startDate.getFullYear(), 1);
      this.formatDate(stopDate.getDate(), stopDate.getMonth(), stopDate.getFullYear(), 2);
    }

    getRadioButton = (e) => {
      var fix = document.getElementById("fix");
      var enhance = document.getElementById("enhance");
      var planned = document.getElementById("planned");
      var unplanned = document.getElementById("unplanned");
      var emergency = document.getElementById("emergency");
      var low = document.getElementById("low");
      var medium = document.getElementById("medium");
      var high = document.getElementById("high");
      if (fix.checked == true) {
        this.reasonType = fix.value;
      }
      if (enhance.checked == true) {
        this.reasonType = enhance.value;
      }
      if (planned.checked == true) {
        this.changeType = planned.value;
      }
      if (unplanned.checked == true) {
        this.changeType = unplanned.value;
      }
      if (emergency.checked == true) {
        this.changeType = emergency.value;
      }
      if (low.checked == true) {
        this.riskLevel = low.value;
      }
      if (medium.checked == true) {
        this.riskLevel = medium.value;
      }
      if (high.checked == true) {
        this.riskLevel = high.value;
      }
    }

    saveCookies = (e) => {
        document.cookie = "appID=" + this.removeQuote(this.appId) + "; path=/;";
        document.cookie = "description=" + this.removeQuote(this.description) + "; path=/";
        document.cookie = "whyDescription=" + this.removeQuote(this.whyDescription) + "; path=/;";
        document.cookie = "result=" + this.removeQuote(this.result) + "; path=/;";
        document.cookie = "backOutPlan=" + this.removeQuote(this.backOutPlan) + "; path=/;";
        document.cookie = "backOutMinutes=" + this.removeQuote(this.backOutMinutes) + "; path=/;";
        document.cookie = "reasonType= " + this.removeQuote(this.reasonType) + "; path=/;";
        document.cookie = "changeType= " + this.removeQuote(this.changeType) + "; path=/;";
        document.cookie = "changeDepartment= " + this.removeQuote(this.changeDepartment) + "; path=/;";
        document.cookie = "startDate= " + this.removeQuote(this.startDate) + "; path=/;";
        document.cookie = "stopDate= " + this.removeQuote(this.stopDate) + "; path=/;";
        document.cookie = "startTime= " + this.removeQuote(this.startTime) + "; path=/;";
        document.cookie = "stopTime= " + this.removeQuote(this.stopTime) + "; path=/;";
        document.cookie = "start= " + this.removeQuote(this.origStart) + "; path=/;";
        document.cookie = "end= " + this.removeQuote(this.origEnd) + "; path=/;";
        document.cookie = "devOps= " + this.removeQuote(this.devOps) + "; path=/;";
        document.cookie = "dba= " + this.removeQuote(this.dba) + "; path=/;";
        document.cookie = "security= " + this.removeQuote(this.secur) + "; path=/;";
        document.cookie = "scheduling= " + this.removeQuote(this.sched) + "; path=/;";
        document.cookie = "riskLevel= " + this.removeQuote(this.riskLevel) + "; path=/;";
    }

    execute=(e)=>{   //should be working
        e.preventDefault();
        this.checkFields();
        if (!this.dontSubmit && !this.dateIncorrect && !this.fieldTooLong) {
          this.manageDates();   // obtains date values and stores
          this.getCheckBox();    // obtains values in check boxes
          this.getRadioButton();   // obtains values in radio buttons
          this.saveCookies();    // saves all values to document cookies
          let x = true;
          this.props.execute(true); // functionality for page switch
        } else {
          
          if (this.dontSubmit) {
            document.getElementById("errorField").textContent = "All Fields must be filled out to continue.";
            document.getElementById("errorField").setAttribute("style", "top: 713px; position: absolute; color: red; visibility: visible");
          } else if (this.fieldTooLong) {
            document.getElementById("errorField").textContent = this.fieldIncorrect;
            document.getElementById("errorField").setAttribute("style", "top: 713px; position: absolute; color: red; visibility: visible");
          } else {
            document.getElementById("errorField").setAttribute("style", "top: 713px; position: absolute; color: red; visibility: visible");
            document.getElementById("errorField").textContent = "Change window Start Range Must be less than Change Window Stop Date";
          }
          
        }
        
  }
  
    handleValue = (e, val, tue) => {
        const nameValue = e.target.name;
        const value = JSON.stringify(e.target.value);
        if (val == 0) {
            this.appId = value;
        }
        if (val == 1 && value != "") {
            this.description = value;
        }
        if (val == 2) {
            this.whyDescription = value;
        }
        if (val == 3) {
            this.result = value;
        }
        if (val == 4) {
            this.backOutPlan = value;
        }
        if (val == 5) {
            this.backOutMinutes = value;
        }
    };
    
   loadValues = (cookieName, label) => {
      if (getCookie(cookieName) != undefined) {
        document.getElementById(label).defaultValue = getCookie(cookieName);
      }
      else {
        document.getElementById(label).defaultValue = "";
      }
   }

   checkRadioButton = (cookieName) => {
      if (document.getElementById("fix").value == cookieName) {
        document.getElementById("fix").checked = true;
        this.reasonType = document.getElementById("fix").value;
      }
      if (document.getElementById("enhance").value == cookieName) {
        document.getElementById("enhance").checked = true;
        this.reasonType = document.getElementById("enhance").value;
      }
      if (document.getElementById("planned").value == cookieName) {
        document.getElementById("planned").checked = true;
        this.changeType = document.getElementById("planned").value;
      }
      if (document.getElementById("unplanned").value == cookieName) {
        document.getElementById("unplanned").checked = true;
        this.changeType = document.getElementById("unplanned").value;
      }
      if (document.getElementById("emergency").value == cookieName) {
        document.getElementById("emergency").checked = true;
        this.changeType = document.getElementById("emergency").value;
      }
      if (document.getElementById("dba").value == cookieName) {
        document.getElementById("dba").checked = true;
        this.changeDepartment = document.getElementById("dba").value;
      }
      if (document.getElementById("changeTypeCheckBox").value == cookieName) {
        document.getElementById("changeTypeCheckBox").checked = true;
        this.changeDepartment = document.getElementById("changeTypeCheckBox").value;
      }
      if (document.getElementById("security").value == cookieName) {
        document.getElementById("security").checked = true;
        this.changeDepartment = document.getElementById("security").value;
      }
      if (document.getElementById("scheduling").value == cookieName) {
        document.getElementById("scheduling").checked = true;
        this.changeDepartment = document.getElementById("scheduling").value;
      }
      if (document.getElementById("low").value == cookieName) {
        document.getElementById("low").checked = true;
        this.riskLevel = document.getElementById("low").value;
      }
      if (document.getElementById("medium").value == cookieName) {
        document.getElementById("medium").checked = true;
        this.riskLevel = document.getElementById("medium").value;
      }
      if (document.getElementById("high").value == cookieName) {
        document.getElementById("high").checked = true;
        this.riskLevel = document.getElementById("high").value;
      }
      if (document.getElementById("fix").value == cookieName) {
        document.getElementById("fix").checked = true;
        this.riskLevel = document.getElementById("fix").value;
      }
      if (document.getElementById("enhance").value == cookieName) {
        document.getElementById("enhance").checked = true;
        this.riskLevel = document.getElementById("enhance").value;
      }
   }
   

   componentDidMount (){
    if (getCookie("editChangeRequest") == false) {
      deleteCookie("appID", getCookie("appID"), "localhost");
      deleteCookie("description", getCookie("description"), "localhost");
      deleteCookie("whyDescription", getCookie("whyDescription"), "localhost");
      deleteCookie("result", getCookie("result"), "localhost");
      deleteCookie("backOutPlan", getCookie("backOutPlan"), "localhost");
      deleteCookie("backOutMinutes", getCookie("backOutMinutes"), "localhost");
      deleteCookie("start", getCookie("start"), "localhost");
      deleteCookie("end", getCookie("end"), "localhost");
      deleteCookie("reasonType", getCookie("reasonType"), "localhost");
      deleteCookie("changeType", getCookie("changeType"), "localhost");
      deleteCookie("changeDepartment", getCookie("changeDepartment"), "localhost");
      deleteCookie("startDate", getCookie("startDate"), "localhost");
      deleteCookie("stopDate", getCookie("stopDate"), "localhost");
      deleteCookie("startTime", getCookie("startTime"), "localhost");
      deleteCookie("stopTime", getCookie("stopTime"), "localhost");
      deleteCookie("devOps", getCookie("devOps"), "localhost");
      deleteCookie("dba", getCookie("dba"), "localhost");
      deleteCookie("security", getCookie("security"), "localhost");
      deleteCookie("scheduling", getCookie("scheduling"), "localhost");
      deleteCookie("riskLevel", getCookie("riskLevel"), "localhost");
      deleteCookie("editChangeRequest", getCookie("editChangeRequest"), "localhost");
    
  }
    this.loadValues("appID", "applicationID");
    this.appId = document.getElementById("applicationID").value;
    this.loadValues("description", "description");
    this.description = document.getElementById("description").value;
    this.loadValues("whyDescription", "why");
    this.whyDescription = document.getElementById("why").value;
    this.loadValues("result", "whatIsChanging");
    this.result = document.getElementById("whatIsChanging").value;
    this.loadValues("backOutPlan", "backOutPlan");
    this.backOutPlan = document.getElementById("backOutPlan").value;
    this.loadValues("backOutMinutes", "backOutMinutes");
    this.backOutMinutes = document.getElementById("backOutMinutes").value;
    this.loadValues("start", "startDateInput");
    this.startDate = document.getElementById("startDateInput").value;
    this.loadValues("end", "stopDateInput");
    this.stopDate = document.getElementById("stopDateInput").value;
    this.checkRadioButton(getCookie("changeType"));
    this.checkRadioButton(getCookie("devOps"));
    this.checkRadioButton(getCookie("dba"));
    this.checkRadioButton(getCookie("security"));
    this.checkRadioButton(getCookie("scheduling"));
    this.checkRadioButton(getCookie("riskLevel"));
    this.checkRadioButton(getCookie("reasonType"))
   }
  


    render() { 
        return (
        <Form>
          <div className='entryContainer'>
            <div className='backGroundItem'>
          <h1 className = 'imageContainer'> <img className = "logo" src={logo} alt="logo" /> </h1>
             <h2 className='h2'>Change Request Form</h2>
              <fieldset className='fs1'>
              <label className= "labelInput" htmlFor="aId">
              <input 
              className="inputLabelTopPage" id="applicationID" name = "applicationID" rows="9" cols="50" defaultValue="" onChange={e => this.handleValue(e, 0, "applicationID") } placeholder="Application ID" required />
              <p className = "button">Three character ID of the application team implementing the change</p>
              </label>
              <label className= "labelInput" htmlFor="descr">
              <textarea id="description" name = "description" rows="3" cols="30" defaultValue="" onChange={e => this.handleValue(e, 1) } placeholder="Description"></textarea>
              <p className = "button">80 Character description of what the change is</p>
              </label>
              <label className= "labelInput"  htmlFor="why">
             <textarea rows="3" cols="30" placeholder="Why" name = "why" id="why" defaultValue="" onChange={e => this.handleValue(e, 2) }></textarea>
              <p className = "button">Why is the change needed</p>
              </label>
             </fieldset>
             <fieldset className="fs2">
             <label className= "labelInput" htmlFor="whatIs">
                <input className="inputLabelTopPage" id="whatIsChanging" name="whatIsChanging" rows='9' cols = '50' defaultValue="" onChange={e => this.handleValue(e, 3) } placeholder="What is changing" />
                <p className = "button">New version of software, server configuration changes, etc..</p>
              </label>
              <label className= "labelInput" htmlFor="backOut">
              <textarea rows="3" cols="30" placeholder="Back-Out Plan" id="backOutPlan" defaultValue="" onChange={e => this.handleValue(e, 4) } name = "backOutPlan"></textarea>
              <p className = "button">Description of what it takes to revert the change</p>
              </label>
              <label className= "labelInput" htmlFor="backOutMins">
                <input className="inputLabelTopPage" id="backOutMinutes" name="backOutMinutes" rows='9' defaultValue="" cols = '50' onChange={e => this.handleValue(e, 5) } placeholder="Back-Out Minutes" />
                <p className = "button">How long will it take to perform the back-out in minutes</p>
              </label>
             </fieldset>
             <div className = 'radioButtonContainer'>
             <fieldset className="radioButton">
              <legend className="legendRadio">
                Reason Type 
              </legend>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="reasonType" value="Fix" id="fix" />
                <p className="radioP">Fix</p>
              </label>
              <label className="labelRadio">
                <input className="inputRadio" type = "radio" name ="reasonType" value="Enhancement" id="enhance"/>
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
                Risk Level
              </legend>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="riskLevel" value="Low" id="low"/>
                <p className="radioP">Low</p>
              </label>
              <label className="labelRadio">
                <input className="inputRadio" type = "radio" name="riskLevel" value="Medium" id="medium"/>
                <p className="radioP">Medium</p>
              </label>
              <label className= "labelRadio" >
                <input className="inputRadio" type = "radio" name="riskLevel" value="High" id="high"/>
                <p className="radioP">High</p>
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
              <p className="checkP">Scheduling</p>
              </div>
             </fieldset>
             </div>
             <fieldset className="doubleStyle">
              <div className="calDiv">
              <legend className="legendCal">Change Window Start Date</legend>
               <input type = "datetime-local" className="inputCalender" id ="startDateInput" defaultValue="" />
             </div>
             
             <div className="calDiv">
              <legend className="legendCal">Change Window Stop Date</legend>
               <input type = "datetime-local" className="inputCalender" id ="stopDateInput" defaultValue="" />
                </div>
              </fieldset>
            <h2 className='h2' id="errorField" style={{ top: '713px', position: 'absolute', color: 'red', visibility: 'hidden'}}> All Fields must be filled out to continue.
            </h2>

             <fieldset className="Submit">
             <input className="entrySubmit" type="submit" value="Submit" onClick={this.execute} /> 
             </fieldset>
             </div>
             </div>
        </Form>
        );
    }
}

export default EntryPageComponent;