import React, { Component } from 'react';

var navBarNumber = 1 

class NavBar extends Component {
    render() {
    if (navBarNumber == 1) {
    // NavBar for Entry
    return(

        <div>
            <div id="u171" class="ax_default button">
            <div id="u171_div" class=""></div>
            <div id="u171_text" class="text ">
                <p><span>Submit Request</span></p>
                </div>
            </div>

            <div id="u172" class="ax_default button">
            <div id="u172_div" class=""></div>
            <a href="/ListScreenApp" id="u172_text" class="text ">
              <p><span>View Change Reuqests</span></p>
                </a>
            </div>

            <div id="u173" class="ax_default button">
            <div id="u173_div" class=""></div>
            <a href="/Login" id="u173_text" class="text ">
              <p><span>Log out</span></p>
                </a>
            </div>

            <div id="u174" class="ax_default button">
            <div id="u174_div" class=""></div>
            <a href="/ArchivedChangesApp" id="u174_text" class="text ">
              <p><span>View Change Request Archive</span></p>
                </a>
            </div>
        </div>
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    )
    } else if (navBarNumber == 2) {
    // NavBar for Review
        //Stuff for View Change Requests, Logout
    } else if (navBarNumber == 3) {
    // NavBar for ChangeRequestsPage
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    } else {
    // NavBar for ArchivedChangesPage
        //Stuff for Submit Request, View Change Requests, View Change Request Archive, Logout
    }
    }
}

export default NavBar;