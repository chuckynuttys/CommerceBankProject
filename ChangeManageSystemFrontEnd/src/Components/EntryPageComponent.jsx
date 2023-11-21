import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../files/CookieManagement';

class EntryPageComponent extends Component{
    
    constructor(values) {
       super(values)
        this.state = {
            appId:'',
            description:'',
            reasonNo:'',
            temp:'',
            reason:'',
            result:'',
            username:'',
            backOutPlan:'',
            backOutMinutes:'',
            reasonType:'',
            changeType:'', 
            changeDepartment:'',
            startDate:'',
            startTime:'',
            stopDate:'',
            stopTime:'',
            timeOfDay:'',
        }
        //methods go here for declaration
        this.saveCookies = this.saveCookies.bind(this);
        this.handleValue = this.handleValue.bind(this);
        this.convertDateValueToDate = this.convertDateValueToDate.bind(this);
        this.restoreValues = this.restoreValues.bind(this);
        
    };

    removeQuote=(x) => {
      return x.replaceAll("\"", "");
    }

    formatDate=(day, month, year, value) => {
      let newDay = this.convertDateValueToDate(day, "Day", null);
      let newMonth = this.convertDateValueToDate(month, "Month", null);
      let newYear = this.convertDateValueToDate(year, "Year", null);
      if (value == 1) 
        this.startDate = newMonth + " " + newDay + ", " + newYear;
      if (value == 2)
        this.stopDate = newMonth + " " + newDay + ", " + newYear;
    }

    formatTime=(hour, minute, value) => {
      let newHour = this.convertDateValueToDate(hour, "Hour", null);
      let newMinute = this.convertDateValueToDate(minute, "Minute", null);
      if (value == 1) 
        this.startTime = newHour + ":" + newMinute + this.timeOfDay;
      if (value == 2)
        this.stopTime = newHour + ":" + newMinute + this.timeOfDay;
    }

    

    convertDateValueToDate = (date, type, amOrpm) => {
      switch (type) {
        case "Year":
          return date.toString();
    
        case "Month":
          switch (date) {
            case 0:
              return "January";
            case 1:
              return "Febuary";
            case 2:
              return "March";
            case 3:
              return "April";
            case 4:
              return "May";
            case 5:
              return "June";
            case 6:
              return "July";
            case 7:
              return "August";
            case 8:
              return "September";
            case 9:
              return "October";
            case 10:
              return "November";
            case 11:
              return "December";
          }
        case "Day":
          switch (date) {
            case 1:
              return "1st";
            case 2:
              return "2nd";
            case 3:
              return "3rd";
            case 4:
              return "4th";
            case 5:
              return "5th";
            case 6:
              return "6th";
            case 7:
              return "7th";
            case 8:
              return "8th";
            case 9:
              return "9th";
            case 10:
              return "10th";
            case 11:
              return "11th";
            case 12:
              return "12th";
            case 13:
              return "13th";
            case 14:
              return "14th";
            case 15:
              return "15th";
            case 16:
              return "16th";
            case 17:
              return "17th";
            case 18:
              return "18th";
            case 19:
              return "19th";
            case 20:
              return "20th";
            case 21:
              return "21st";
            case 22:
              return "22nd";
            case 23:
              return "23rd";
            case 24:
              return "24th";
            case 25:
              return "25th";
            case 26:
              return "26th";
            case 27:
              return "27th";
            case 28:
              return "28th";
            case 29:
              return "29th";
            case 30:
              return "30th";
            default:
              return "31st";
          }
        case "Hour":
          date = parseInt(date);
          if (date == 0) {
            date = 12;
            this.timeOfDay = " PM";
            return date.toString();
          } else if (date > 12) {
            date = date - 12;
            this.timeOfDay = " PM";
            return date.toString();
          } else {
            this.timeOfDay = " AM";
            return date.toString();
          }
        case "Minute":
          if (amOrpm == "AM") {
            return date.toString();
          } else {
            return date.toString();
          }
      }
    }

    getCheckBox=(e)=> {
      let x = false;
      //const form = document.querySelector('form');
      document.querySelectorAll('[type="checkbox"]').forEach(item => {
      if (item.checked === true) {
          if (x === false) {
             this.changeDepartment = item.value;
             x = true;
          }
          else
             this.changeDepartment = this.changeDepartment + ', ' + item.value;
      }
      })
      
    }

    saveCookies=(e)=>{   //should be working
        e.preventDefault();
        this.startDate = document.getElementById("startDateInput").value;
        this.stopDate = document.getElementById("stopDateInput").value;
        console.log(this.startDate);
        
        const startDate = new Date(this.startDate);
        const stopDate = new Date(this.stopDate);
        const startTime = new Date(this.startDate);
        const stopTime = new Date(this.stopDate);
        console.log(startDate.getDate());
        this.formatTime(startDate.getHours(), startDate.getMinutes(), 1);
        this.formatTime(stopDate.getHours(), stopDate.getMinutes(), 2);
        this.formatDate(startDate.getDate(), startDate.getMonth(), startDate.getFullYear(), 1);
        this.formatDate(stopDate.getDate(), stopDate.getMonth(), stopDate.getFullYear(), 2);
        this.getCheckBox();
        let value = 0;
        var fix = document.getElementById("fix");
        var enhance = document.getElementById("enhance");
        var planned = document.getElementById("planned");
        var unplanned = document.getElementById("unplanned");
        var emergency = document.getElementById("emergency");
        if (fix.checked == true) {
          this.reasonType = fix.value;
          value = 1;
        }
        if (enhance.checked == true) {
          this.reasonType = enhance.value;
          value = 2;
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
        this.reasonNo=value;
        document.cookie = "appID=" + this.removeQuote(this.appId) + "; path=/;";
        document.cookie = "reasonNo=" + this.reasonNo + "; path=/;";
        document.cookie = "description=" + this.removeQuote(this.description) + "; path=/";
        document.cookie = "reason=" + this.removeQuote(this.reason) + "; path=/;";
        document.cookie = "result=" + this.removeQuote(this.result) + "; path=/;";
        document.cookie = "backOutPlan=" + this.removeQuote(this.backOutPlan) + "; path=/;";
        document.cookie = "backOutMinutes=" + this.removeQuote(this.backOutMinutes) + "; path=/;";
        document.cookie = "reasonType= " + this.removeQuote(this.reasonType) + "; path=/;";
        document.cookie = "changeType= " + this.removeQuote(this.changeType) + "; path=/;";
        document.cookie = "changeDepartment= " + this.removeQuote(this.changeDepartment) + "; path=/;";
        document.cookie = "startDate= " + this.removeQuote(this.startDate) + "; path=/;";
        document.cookie = "stopDate= " + this.removeQuote(this.stopDate) + "; path=/;";
        document.cookie = "startTime= " + this.removeQuote(this.startTime) + "; path=/;"
        document.cookie = "stopTime= " + this.removeQuote(this.stopTime) + "; path=/;"
        console.log(document.cookie);
        let x = true;
        this.props.execute(true);
       
    }

    handleValue = (e, val) => {
        const nameValue = e.target.name;
        const value = JSON.stringify(e.target.value);
        if (val == 0) {
            this.appId = value;
        }
        if (val == 1 && value != "") {
            this.description = value;
        }
        if (val == 2) {
            this.reason = value;
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
    
   restoreValues = (placeholder, cookieName) => {
      if (getCookie(cookieName) == undefined) {
        return placeholder;
      }
      return getCookie(cookieName);
   }

    render() { 
        return (
        <Form>
          <fieldset>
              <label className= "labelInput" htmlFor="aId">
              <input 
              className="inputLabelTopPage" id="applicationID" name = "applicationID" rows="9" cols="50" onChange={e => this.handleValue(e, 0) } placeholder={this.restoreValues("Application ID", "appID")} />
              <p className = "button">Three character ID of the application team implementing the change</p>
              </label>
              <label className= "labelInput" htmlFor="descr">
              <textarea id="description" name = "description" rows="3" cols="30" onChange={e => this.handleValue(e, 1) } placeholder="Description"></textarea>
              <p className = "button">80 Character description of what the change is</p>
              </label>
              <label className= "labelInput"  htmlFor="why">
             <textarea rows="3" cols="30" placeholder="Why" name = "why" id="why" onChange={e => this.handleValue(e, 2) }></textarea>
              <p className = "button">Why is the change needed</p>
              </label>
             </fieldset>
             <fieldset className="fs2">
             <label className= "labelInput" htmlFor="whatIs">
                <input className="inputLabelTopPage" id="whatIsChanging" name="whatIsChanging" rows='9' cols = '50' onChange={e => this.handleValue(e, 3) } placeholder="What is changing?" />
                <p className = "button">New version of software, server configuration changes, etc..</p>
              </label>
              <label className= "labelInput" htmlFor="backOut">
              <textarea rows="3" cols="30" placeholder="Back-Out Plan" id="backOutPlan"  onChange={e => this.handleValue(e, 4) } name = "backOutPlan"></textarea>
              <p className = "button">Description of what it takes to revert the change</p>
              </label>
              <label className= "labelInput" htmlFor="backOutMins">
                <input className="inputLabelTopPage" id="backOutMinutes" name="backOutMinutes" rows='9' cols = '50' onChange={e => this.handleValue(e, 5) } placeholder="Back-Out Minutes" />
                <p className = "button">How long will it take to perform the back-out in minutes</p>
              </label>
             </fieldset>
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
               <input type = "datetime-local" className="inputCalender" id ="startDateInput" />
             </div>
             
             <div className="calDiv">
              <legend className="legendCal">Change Window Stop Date</legend>
               <input type = "datetime-local" className="inputCalender" id ="stopDateInput" />
                </div>
              </fieldset>
             <fieldset className="Submit">
             <input type="submit" value="Submit" onClick={this.saveCookies} /> 
          
             </fieldset>
        </Form>
        );

    }
   
}

 

export default EntryPageComponent;