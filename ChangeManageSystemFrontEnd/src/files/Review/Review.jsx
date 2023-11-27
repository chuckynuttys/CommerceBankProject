import React, { useState, useEffect } from "react";
import "../../css/pages.css";
import "../../css/styles.css";
import "./Review.css";
import { useNavigate } from "react-router-dom";
import backgroundImg from "../../Images/BackgroundImg.jpg";
import logo from "../../Images/Logo.png";
import NavBar from "../../Components/NavBar";
import {
  deleteCookie,
  getCookie,
  makeCookie,
} from "../Functions/CookieManagement";
var navBarNumber;

const Review = () => {
  const navigate = useNavigate();
  const toEntry = (e) => {
    e.preventDefault();
    console.log(e.submitter.value);
    if (e.submitter.value == "modify") {
      navigate("/Entry");
    } else {
      let otherNeededDepartmentsList = "";
      if (getCookie("scheduling") != "") {
        otherNeededDepartmentsList = getCookie("scheduling");
      }
      if (getCookie("security") != "") {
        if (getCookie("scheduling") == "") {
          otherNeededDepartmentsList = getCookie("security");
        } else {
          otherNeededDepartmentsList += ", " + getCookie("security");
        }
      }
      if (getCookie("dba") != "") {
        if (getCookie("scheduling") == "" && getCookie("security") == "") {
          otherNeededDepartmentsList = getCookie("dba");
        } else {
          otherNeededDepartmentsList += ", " + getCookie("dba");
        }
      }
      if (getCookie("devOps") != "") {
        if (
          getCookie("scheduling") == "" &&
          getCookie("security") == "" &&
          getCookie("dba") == ""
        ) {
          otherNeededDepartmentsList = getCookie("devOps");
        } else {
          otherNeededDepartmentsList += ", " + getCookie("devOps");
        }
      }
      const changeRequest = {
        applicationId: getCookie("appID"),
        description: getCookie("description"),
        reason: getCookie("reasonType"),
        changeType: getCookie("changeType"),
        whyDescription: getCookie("whyDescription"),
        whatDescription: getCookie("result"),
        backOutPlan: getCookie("backOutPlan"),
        backOutMinutes: getCookie("backOutMinutes"),
        changeWindowStartDate: getCookie("startDate"),
        changeWindowStopDate: getCookie("stopDate"),
        changeWindowStartTime: getCookie("startTime"),
        changeWindowStopTime: getCookie("stopTime"),
        otherNeededDepartments: otherNeededDepartmentsList,
        riskLevel: getCookie("riskLevel"),
        implementer: getCookie("name"),
        implementationStatus: null,
        implementationDate: null,
        implementationTime: null,
        stateLevel: "Open",
        archivedStatus: false,
      };

      if (getCookie("editChangeRequest")) {
        const params = {
          username: getCookie("username"),
        };
        changeRequest.changeId = getCookie("changeRequestId");
        changeRequest.reasonNumber = getCookie("reasonNo");

        const searchParams = new URLSearchParams(params);
        console.log(changeRequest);
        fetch(
          `http://localhost:8080/changerequests/` +
            parseInt(getCookie("changeRequestId")) +
            "?" +
            searchParams.toString(),
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(changeRequest),
          }
        );
      } else {
        const params = {
          username: getCookie("username"),
        };
        const searchParams = new URLSearchParams(params);
        fetch(
          `http://localhost:8080/changerequest?` + searchParams.toString(),
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(changeRequest),
          }
        );
      }

      deleteCookie("start", getCookie("start"), "localhost");
      deleteCookie(
        "changeDepartment",
        getCookie("changeDepartment"),
        "localhost"
      );
      deleteCookie("appID", getCookie("appID"), "localhost");
      deleteCookie(
        "editChangeRequest",
        getCookie("editChangeRequest"),
        "localhost"
      );
      deleteCookie(
        "changeRequestId",
        getCookie("changeRequestId"),
        "localhost"
      );
      deleteCookie("startTime", getCookie("startTime"), "localhost");
      deleteCookie("security", getCookie("security"), "localhost");
      deleteCookie("startDate", getCookie("startDate"), "localhost");
      deleteCookie("riskLevel", getCookie("riskLevel"), "localhost");
      deleteCookie("changeType", getCookie("changeType"), "localhost");
      deleteCookie("stopDate", getCookie("stopDate"), "localhost");
      deleteCookie("stop", getCookie("stop"), "localhost");
      deleteCookie("reasonType", getCookie("reasonType"), "localhost");
      deleteCookie("end", getCookie("end"), "localhost");
      deleteCookie("description", getCookie("description"), "localhost");
      deleteCookie("scheduling", getCookie("scheduling"), "localhost");
      deleteCookie("backOutMinutes", getCookie("backOutMinutes"), "localhost");
      deleteCookie("devOps", getCookie("devOps"), "localhost");
      deleteCookie("backOutPlan", getCookie("backOutPlan"), "localhost");
      deleteCookie("stopTime", getCookie("stopTime"), "localhost");
      deleteCookie("reason", getCookie("reason"), "localhost");
      deleteCookie("reasonNo", getCookie("reasonNo"), "localhost");
      deleteCookie("result", getCookie("result"), "localhost");
      deleteCookie("whyDescription", getCookie("whyDescription"), "localhost");
      deleteCookie("dba", getCookie("dba"), "localhost");

      navigate("/ListScreenApp");
    }
  };
  useEffect(() => {
    let form = document.getElementById("form");
    form.addEventListener("submit", toEntry);
  }, []);
  let description = getCookie("description");
  return (
    <form id="form">
      <div id="base" class="">
        {/*  <div id="u440" class="ax_default image">
        <img id="u440_img" class="img " src={backgroundImg} />
        <div id="u440_text" class="text " style={{ display: 'none', visibility: 'hidden' }}>

          <p></p>
        </div>
      </div> */}
        <NavBar navBarNumber={2} />

        <div className="headerReview">
          <div className="imgWrap">
            <img id="u453_img" class="img " src={logo} />

            <div className="headerDiv">
              <span className="headingFormat">Review Form</span>
            </div>
          </div>
        </div>
        <div className="fullBody">
          <div className="bodyReview">
          <div className="rowWrapper">
            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Full Name</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("name")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Application ID</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("appID")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Back Out Minutes</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("backOutMinutes")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Reason</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("reasonType")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Change Type</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("changeType")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Risk Level</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("riskLevel")}</span>
              </div>

            </div>

            </div>
          </div>{" "}
          {/*End Body Review Row */}

          <div className="bodyReview">
            <div className="rowWrapper">

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Description</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("description")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">What</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("result")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Why</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("whyDescription")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Back Out Plan</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("backOutPlan")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Other Needed Departments</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("changeDepartment")}</span>
              </div>
            </div>
            </div>
          </div> {/*End Body Review Row */}

            <div className="bodyReview">
            <div className="rowWrapper">
            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Change Window Start Date</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("startDate")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Change Window Start Time</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("startTime")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Change Window Stop Date</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("stopDate")}</span>
              </div>
            </div>

            <div className="bodyWrap">
              <div className="titleBox">
                <span className="titleText">Change Window Stop Time</span>
              </div>
              <div className="infoBox">
                <span className="infoText">{getCookie("stopTime")}</span>
              </div>
            </div>
            </div>
            </div> {/*End Body Review Row */}

        <div className="bodyReview">
          <div className="rowWrapper">
            <div className="bodyWrap">
          <button
            className="greenButton"
            style={{ cursor: "pointer" }}
            type="submit"
            value="modify"
          >
              <p>
                <span className="titleText">Modify Change Request</span>
              </p>
          </button>
          </div>
          <div className="bodyWrap">
          <button
            className="greenButton"
            style={{ cursor: "pointer" }}
            type="submit"
            value="submit"
          >
              <p>
                <span className="titleText">Submit Change Request</span>
              </p>
  
          </button>
          </div>
          </div>
          </div>
        </div>
        </div>
    </form>
  );
};

export default Review;
