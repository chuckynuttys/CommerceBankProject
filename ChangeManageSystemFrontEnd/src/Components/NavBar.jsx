import React, { Component } from 'react';

var navBarNumber = 1

class NavBar extends Component {
    render() {
    if (navBarNumber === 1) {
    // NavBar for Entry
    return(

        <div>
            <div id="u171" class="ax_default button">
                <div id="u171_div" class=""></div>
                <a href="/Entry" id="u171_text" class="text ">
                    <p><span>Submit Request</span></p>
                </a>
            </div>

            <div id="u172" class="ax_default button">
            <div id="u172_div" class=""></div>
                <a href="/ListScreenApp" id="u172_text" class="text ">
              <p><span>View Change Requests</span></p>
                </a>
            </div>

            <div id="u174" class="ax_default button">
            <div id="u174_div" class=""></div>
            <a href="/ArchivedChangesApp" id="u174_text" class="text ">
              <p><span>View Change Request Archive</span></p>
                </a>
            </div>

            <div id="u173" class="ax_default button">
            <div id="u173_div" class=""></div>
            <a href="/Login" id="u173_text" class="text ">
              <p><span>Log out</span></p>
                </a>
            </div>

            
        </div>
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    )
    } else if (navBarNumber === 2) {
    // NavBar for Review
    return (
        <div>

            <div id="478" class="ax_default button">
            <div id="u478_div" class=""></div>
            <a href="/Review" id="u478_text" class="text ">
              <p><span>View Change Request Archive</span></p>
                </a>
            </div>

            <div id="u479" class="ax_default button">
            <div id="u479_div" class=""></div>
            <a href="/Login" id="u479_text" class="text ">
              <p><span>Log out</span></p>
                </a>
            </div>
        </div>
    );
        //Stuff for View Change Requests, Logout
    } else if (navBarNumber === 3) {
    // NavBar for ChangeRequestsPage
        <div>
            <div id="u495" class="ax_default button">
                <div id="u495_div" class=""></div>
                <a href="/Entry" id="u495_text" class="text ">
                    <p><span>Submit Request</span></p>
                </a>
            </div>


            <div id="u496" class="ax_default button">
                <div id="u496_div" class=""></div>
                <a href="/Login" id="u496_text" class="text ">
                    <p><span>Log out</span></p>
                </a>
            </div>


            <div id="u497" class="ax_default button">
                <div id="u497_div" class=""></div>
                <a href="/ArchivedChangesApp" id="u497_text" class="text ">
                    <p><span>View Change Request Archive</span></p>
                </a>
            </div>

            <div id="u499" class="ax_default button">
                <div id="u499_div" class=""></div>
                <a href="/ListScreenApp" id="u499_text" class="text ">
                    <p><span>View Change Requests</span></p>
                </a>
            </div>
        </div>
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    } else {
    // NavBar for ArchivedChangesPage
        <div>
            <div id="u560" class="ax_default button">
                <div id="u560_div" class=""></div>
                <a href="/Entry" id="u560_text" class="text ">
                    <p><span>Submit Request</span></p>
                </a>
            </div>


            <div id="u561" class="ax_default button">
                <div id="u461_div" class=""></div>
                <a href="/Login" id="u461_text" class="text ">
                    <p><span>Log out</span></p>
                </a>
            </div>
        </div>
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    }
    }
}

export default NavBar;