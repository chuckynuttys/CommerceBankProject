import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

class EntryPageComponent extends Component {

  constructor(values) {
    super(values)
    this.state = {
      appId: '',
      description: '',
      temp: '',
      reason: '',
      result: '',
      backOutPlan: '',
      backOutMinutes: '',
      reasonType: '',
      changeType: '',
      changeDepartment: '',
      startDate: '',
      stopDate: '',
    }
    //methods go here for declaration
    this.saveCookies = this.saveCookies.bind(this);
    this.handleValue = this.handleValue.bind(this);
  };
  getCheckBox = (e) => {
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

  saveCookies = (e) => {   //should be working
    e.preventDefault();
    this.startDate = document.getElementById("startDateInput").value;
    this.stopDate = document.getElementById("stopDateInput").value;
    this.getCheckBox();
    var fix = document.getElementById("fix");
    var enhance = document.getElementById("enhance");
    var planned = document.getElementById("planned");
    var unplanned = document.getElementById("unplanned");
    var emergency = document.getElementById("emergency");
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
    document.cookie = "appID=" + this.appId;
    document.cookie = "description=" + this.description;
    document.cookie = "reason=" + this.reason;
    document.cookie = "result=" + this.result;
    document.cookie = "backOutPlan=" + this.backOutPlan;
    document.cookie = "backOutMinutes=" + this.backOutMinutes;
    document.cookie = "reasonType= " + this.reasonType;
    document.cookie = "changeType= " + this.changeType;
    document.cookie = "changeDepartment= " + this.changeDepartment;
    document.cookie = "startDate= " + this.startDate;
    document.cookie = "changeWindowStopDate= " + this.stopDate;
    console.log(document.cookie);
    let x = true;
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



  render() {
    return (
      <Form>
        <fieldset>
          <label className="labelInput" htmlFor="aId">
            <input
              className="inputLabelTopPage" id="applicationID" name="applicationID" rows="9" cols="50" onChange={e => this.handleValue(e, 0)} placeholder="Application ID" />
            <p className="button">Three character ID of the application team implementing the change</p>
          </label>
          <label className="labelInput" htmlFor="descr">
            <textarea id="description" name="description" rows="3" cols="30" onChange={e => this.handleValue(e, 1)} placeholder="Description"></textarea>
            <p className="button">80 Character description of what the change is</p>
          </label>
          <label className="labelInput" htmlFor="why">
            <textarea rows="3" cols="30" placeholder="Why" name="why" id="why" onChange={e => this.handleValue(e, 2)}></textarea>
            <p className="button">Why is the change needed</p>
          </label>
        </fieldset>
        <fieldset className="fs2">
          <label className="labelInput" htmlFor="whatIs">
            <input className="inputLabelTopPage" id="whatIsChanging" name="whatIsChanging" rows='9' cols='50' onChange={e => this.handleValue(e, 3)} placeholder="What is changing?" />
            <p className="button">New version of software, server configuration changes, etc..</p>
          </label>
          <label className="labelInput" htmlFor="backOut">
            <textarea rows="3" cols="30" placeholder="Back-Out Plan" id="backOutPlan" onChange={e => this.handleValue(e, 4)} name="backOutPlan"></textarea>
            <p className="button">Description of what it takes to revert the change</p>
          </label>
          <label className="labelInput" htmlFor="backOutMins">
            <input className="inputLabelTopPage" id="backOutMinutes" name="backOutMinutes" rows='9' cols='50' onChange={e => this.handleValue(e, 5)} placeholder="Back-Out Minutes" />
            <p className="button">How long will it take to perform the back-out in minutes</p>
          </label>
        </fieldset>
        <fieldset className="radioButton">
          <legend className="legendRadio">
            Reason Type
          </legend>
          <label className="labelRadio" >
            <input className="inputRadio" type="radio" name="reasonType" value="Fix" id="fix" />
            <p className="radioP">Fix</p>
          </label>
          <label className="labelRadio">
            <input className="inputRadio" type="radio" name="reasonType" value="Enhancement" id="enhance" />
            <p className="radioP">Enhancement</p>
          </label>
        </fieldset>
        <fieldset className="radioButton">
          <legend className="legendRadio">
            Change Type
          </legend>
          <label className="labelRadio" >
            <input className="inputRadio" type="radio" name="changeType" value="Planned" id="planned" />
            <p className="radioP">Planned</p>
          </label>
          <label className="labelRadio">
            <input className="inputRadio" type="radio" name="changeType" value="Unplanned" id="unplanned" />
            <p className="radioP">Unplanned</p>
          </label>
          <label className="labelRadio" >
            <input className="inputRadio" type="radio" name="changeType" value="Emergency" id="emergency" />
            <p className="radioP">Emergency</p>
          </label>
        </fieldset>
        <fieldset className="radioButton">
          <legend className="legendRadio">
            Other Needed Departments
          </legend>
          <div className="radioElements">
            <input className="inputCheck" type="checkbox" name="devops" value="DevOps" id="changeTypeCheckBox" />
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
            <input type="datetime-local" className="inputCalender" id="startDateInput" />
          </div>

          <div className="calDiv">
            <legend className="legendCal">Change Window Stop Date</legend>
            <input type="datetime-local" className="inputCalender" id="stopDateInput" />
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