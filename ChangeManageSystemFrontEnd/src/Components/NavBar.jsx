import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';



const NavBar = (props) => {
    const navigate = useNavigate();
    function handleClick(value) {
        console.log(value);
        navigate("/" + value);
    }
    if (props.navBarNumber == 1) {
    // NavBar for Entry
    return(

        <div>
            <div id="u171" class="ax_default button">
                <div id="u171_div" class=""></div>
                <div id="u171_text" class="text ">
                    <p><span>Submit Request</span></p>
                </div>
            </div>

            <div id="u172" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("ListScreenApp")}>
            <div id="u172_div" class=""></div>
                <div id="u172_text" class="text ">
              <p><span>View Change Requests</span></p>
                </div>
            </div>

            <div id="u174" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("ArchivedChangesApp")}>
            <div id="u174_div" class=""></div>
            <div id="u174_text" class="text ">
              <p><span>View Change Request Archive</span></p>
                </div>
            </div>

            <div id="u173" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Login")}>
            <div id="u173_div" class=""></div>
            <div id="u173_text" class="text ">
              <p><span>Log out</span></p>
                </div>
            </div>

            
        </div>
        
    )
    } else if (props.navBarNumber == 2) {
    // NavBar for Review
    return (
        <div>

            <div id="478" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("ListScreenApp")}>
            <div id="u478_div" class=""></div>
            <div id="u478_text" class="text ">
              <p><span>View Change Requests</span></p>
                </div>
            </div>

            <div id="u479" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Login")}>
            <div id="u479_div" class=""></div>
            <div id="u479_text" class="text ">
              <p><span>Log out</span></p>
                </div>
            </div>
        </div>
    );
        //Stuff for View Change Requests, Logout
    } else if (props.navBarNumber == 3) {
    // NavBar for ChangeRequestsPage
    return (
        <div>
            <div id="u495" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Entry")}>
                <div id="u495_div" class=""></div>
                <div id="u495_text" class="text ">
                    <p><span>Submit Request</span></p>
                </div>
            </div>


            <div id="u496" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Login")}>
                <div id="u496_div" class=""></div>
                <div id="u496_text" class="text ">
                    <p><span>Log out</span></p>
                </div>
            </div>


            <div id="u497" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("ArchivedChangesApp")}>
                <div id="u497_div" class=""></div>
                <div id="u497_text" class="text ">
                    <p><span>View Change Request Archive</span></p>
                </div>
            </div>

            <div id="u499" class="ax_default button">
                <div id="u499_div" class=""></div>
                <div id="u499_text" class="text ">
                    <p><span>View Change Requests</span></p>
                </div>
            </div>
        </div>
    )
        
    } else {
    // NavBar for ArchivedChangesPage
    return(
        <div>
            <div id="u560" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Entry")}>
                <div id="u560_div" class=""></div>
                <div id="u560_text" class="text ">
                    <p><span>Submit Request</span></p>
                </div>
            </div>
            <div id="u579" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("ListScreenApp")}>
                <div id="u579_div" class=""></div>
                <div id="u579_text" class="text ">
                    <p><span>View Change Requests</span></p>
                </div>
            </div>
            <div id="u578" class="ax_default button">
                <div id="u578_div" class=""></div>
                <div id="u578_text" class="text ">
                    <p><span>View Change Request Archive</span></p>
                </div>
            </div>

            <div id="u561" class="ax_default button" style={{cursor: 'pointer'}} onClick={() => handleClick("Login")}>
                <div id="u561_div" class=""></div>
                <div id="u461_text" class="text ">
                    <p><span>Log out</span></p>
                </div>
            </div>
            
        </div>
        
    )
    }
    }
export default NavBar;