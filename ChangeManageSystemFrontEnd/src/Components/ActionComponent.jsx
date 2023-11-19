import React, { Component } from "react";
import user from "../files/Functions/UserFile";
import { getCookie } from "../files/Functions/CookieManagement";
import { left } from "@popperjs/core";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { convertDateToDateValue } from "../files/Functions/ConvertDateToDateValue";
import { convertDateValueToDate } from "../files/Functions/ConvertDateValueToDate";


class ActionComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stateLevel: props.stateLevel,
            changeId: props.changeId,
            count: 0,
            count2: 100,
            childState: false,
            userId: props.currentUserId,
            date: new Date(),
            reload: true,

        }
        this.handleClick = this.handleClick.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.timeConversion = this.timeConversion.bind(this);
        this.fetchRequest = this.fetchRequest.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.stateLevel !== this.props.stateLevel) {
            this.setState({ childState: !this.state.childState });
            this.setState({ stateLevel: this.props.stateLevel });

        }
    }


    handleClick = (e) => {
        const authorizationLevel = getCookie("authorizationLevel");
        const params = {
            stateLevel: this.state.stateLevel,
        }

        if (e.target.value == "Freeze") {
            // Freeze 
            params.stateLevel = "Frozen";
            this.state.reload = true;
        } else if (e.target.value == "Approve") {
            // Approve & Archive if user role is Operations, otherwise go to next department.
            let confirm = window.confirm("Are you sure you want to approve the Change Request?");
            if (confirm) {
                switch (authorizationLevel) {
                    case "departmentUser":
                        params.stateLevel = "Department Approved";
                        this.state.reload = true;
                        break;
                    case "applicationUser":
                        params.stateLevel = "Application Approved";
                        this.state.reload = true;
                        break;
                    case "operationUser":
                        this.showPopup();
                        this.state.reload = false;
                        break;
                }

            } else {
                this.state.reload = false;
            }

        } else if (e.target.value == "Deny") {
            // Deny & Archive
            let confirm = window.confirm("Are you sure you want to Deny the Change Request?");
            if (confirm) {
                params.stateLevel = "Denied";
                params.archivedStatus = "true";
                this.state.reload = true;
            } else {
                this.state.reload = false;
            }

        } else if (e.target.value == "Edit") {
            // Edit function here
            // Should set some variable to be checked in Entry page.
            // If variable is true, make a fetch request for a specific id, input the results into the fields,
            // then repeat the process as if a regular Entry page form.


        } else {
            // Unfreeze
            params.stateLevel = "Open";
            this.state.reload = true;
        }
        this.fetchRequest(params);

    }

    fetchRequest = (params) => {
        const searchParams = new URLSearchParams(params);
        fetch(`http://localhost:8080/changerequests/` + this.state.changeId + '?' + searchParams.toString(), { method: 'PATCH' });
        if (this.state.reload) {
            window.location.reload();
        }
    }

    timeConversion = (s) => {
        var time = s.split(':');

        var hour = parseInt(time[0]);
        if (hour > 12) {
            time[1] += 'pm';
        } else {
            time[1] += 'am';
        }

        var minute = time[1];

        if (minute.indexOf('am') != -1 && hour == 0) {
            time[0] = '12';
        }
        if (minute.indexOf('pm') != -1 && hour > 12) {
            time[0] = hour - 12;
        }
        return time.join(':').replace(/(am|pm)/, '');
    }



    showPopup = () => {


        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: 'Select a date and time for Implementation that is between the Start Window period and Stop Window period.',
            html: <input type="datetime-local" onChange={this.handleChange} />,
            confirmButtonText: 'OK',
            focusConfirm: false,
            showCancelButton: true,

        }).then((result) => {
            if (result.isConfirmed) {
                // Sets the Start Time and Dates as their raw values not as Date Values
                let startTime = this.props.changeWindowStartTime;
                let startDate = this.props.changeWindowStartDate;

                // Splits startTime and converts it into a proper Date value for Hours and Minutes
                startTime = startTime.split(" ");
                let time = startTime[0].split(":");
                const startHour = convertDateToDateValue(time[0], "Hour", startTime[1]);
                const startMinute = convertDateToDateValue(time[1], "Minute", startTime[1]);

                // Splits startDate and converts it into a proper Date value for Month, Day, Year
                startDate = startDate.split(" ");

                const startMonth = convertDateToDateValue(startDate[0], "Month", startTime[1]);
                const startDay = convertDateToDateValue(startDate[1], "Day", startTime[1]);
                const startYear = convertDateToDateValue(startDate[2], "Year", startTime[1]);

                // Repeats the same logic for stop Time and Date as for start Time and Date
                let stopTime = this.props.changeWindowStopTime;
                let stopDate = this.props.changeWindowStopDate;

                stopTime = stopTime.split(" ");
                let time2 = stopTime[0].split(":");
                const stopHour = convertDateToDateValue(time2[0], "Hour", stopTime[1]);
                const stopMinute = convertDateToDateValue(time2[1], "Minute", stopTime[1]);
                stopDate = stopDate.split(" ");

                const stopMonth = convertDateToDateValue(stopDate[0], "Month", stopTime[1]);
                const stopDay = convertDateToDateValue(stopDate[1], "Day", stopTime[1]);
                const stopYear = convertDateToDateValue(stopDate[2], "Year", stopTime[1]);
                // Creates three new Dates, correctly putting startDateAndTime, stopDateAndTime, currentDateandTime into comparable variables.
                const startDateAndTime = new Date(startYear, startMonth, startDay, startHour, startMinute);
                const stopDateAndTime = new Date(stopYear, stopMonth, stopDay, stopHour, stopMinute);
                const currentDateandTime = new Date(this.state.date);

                // Compares to see if the current date is between the dates using getTime()
                if (currentDateandTime.getTime() > startDateAndTime.getTime() && currentDateandTime.getTime() < stopDateAndTime.getTime()) {
                    alert("You selected: " + currentDateandTime.toUTCString() + "\nAnd it is between Change Request time range.");
                    this.state.reload = true;

                    // Splits the fields up to then do the reverse of what was done in convertDateToDateValue()
                    let currentYear = currentDateandTime.getFullYear();
                    let currentMonth = currentDateandTime.getMonth();
                    let currentDay = currentDateandTime.getDate();
                    let currentHour = currentDateandTime.getHours();
                    let currentMinute = currentDateandTime.getMinutes();

                    currentYear = convertDateValueToDate(currentYear, "Year", null);
                    currentMonth = convertDateValueToDate(currentMonth, "Month", null);
                    currentDay = convertDateValueToDate(currentDay, "Day", null);
                    currentHour = convertDateValueToDate(currentHour, "Hour", null);
                    const amOrpm = currentHour.split(" ");
                    currentMinute = convertDateValueToDate(currentMinute, "Minute", amOrpm[1]);
                    currentHour = amOrpm[0];

                    let currentImplementDate = currentMonth + " " + currentDay + " " + currentYear;
                    let currentImplementTime = currentHour + ":" + currentMinute;

                    // Stores the results in Params and calls fetchRequest()
                    const params = {
                        stateLevel: "Approved",
                        implementationStatus: "Implemented",
                        implementationTime: currentImplementTime,
                        implementationDate: currentImplementDate,
                        archivedStatus: true,
                    }
                    this.fetchRequest(params);
                } else {
                    alert("You selected: " + currentDateandTime.toUTCString() + "\nAnd it is not between the Change Request time range, please try again.");
                    this.state.reload = false;
                }

            }
        });
    };

    handleChange = (event) => {
        this.setState({ date: event.target.value });
    }

    render() {
        if (this.state.stateLevel == "Open") {
            // Display the following options:
            // Freeze
            // Edit
            if (this.props.tabSet == 1) {
                var left1 = '1163px';
                var left2 = '0px';
                var width = '135px';
            } else {
                var left1 = '1019px';
                var left2 = '63px';
                var width = '273px';

            }
            if (this.state.userId == getCookie("id")) {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2, }}>
                            <ul>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Freeze">Freeze</button>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Edit">Edit</button>
                            </ul>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2, }}>

                        </div>
                    </div>
                )
            }
        } else if (this.state.stateLevel == "Frozen") {
            // Display the following options:
            // (Application) Approve
            // Deny
            // Unfreeze
            if (this.props.tabSet == 1) {
                var left1 = '1163px';
                var left2 = '0px';
                var width = '135px';
            } else {
                var left1 = '1019px';
                var left2 = '63px';
                var width = '273px';
            }
            if (this.state.userId == getCookie("id")) {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2 }}>
                            <ul>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Unfreeze">Unfreeze</button>
                            </ul>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2 }}>
                            <ul>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Approve">Approve</button>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Deny">Deny</button>
                            </ul>
                        </div>
                    </div>
                )
            }

        } else {
            // Display the following options:
            // (Department) Approve
            // Deny
            // Unfreeze
            if (this.props.tabSet == 1) {
                var left1 = '1163px';
                var left2 = '0px';
                var width = '135px';
            } else {
                var left1 = '1019px';
                var left2 = '63px';
                var width = '273px';

            }
            if (this.state.userId == getCookie("id")) {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2 }}>
                            <ul>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Unfreeze">Unfreeze</button>
                            </ul>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div id="u531-1" class="ax_default box_1 u531" data-label="Action" style={{ width: '135px', height: '70px', left: left1, top: '0px', visibility: 'inherit' }}>
                        <div id="u531-1_div" class="u531_div" style={{ width: width, height: '70px', visibility: 'inherit' }}></div>
                        <div id="u531-1_text" class="text u531_text" style={{ visibility: 'inherit', left: left2 }}>
                            <ul>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Approve">Approve</button>
                                <button onClick={this.handleClick} style={{ cursor: 'pointer' }} value="Deny">Deny</button>
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    }
}
export default ActionComponent;