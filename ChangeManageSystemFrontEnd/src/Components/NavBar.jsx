import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/navBar.css';
import { makeCookie } from '../files/Functions/CookieManagement';


const NavBar = (props) => {
    const navigate = useNavigate();
    function handleClick(value) {
        makeCookie("editChangeRequest", false);
        navigate("/" + value);
    }
    if (props.navBarNumber == 1) {
        // NavBar for Entry
        return (

            <div className="navbar">
                <div id="u171" className="fourtotal">
                    <div id="u171_div" className=""></div>
                    <div id="u171_text" className="navtext ">
                        <p><span>Submit Request</span></p>
                    </div>
                </div>

                <div id="u172" className="fourtotal" style={{ cursor: 'pointer' }} onClick={() => handleClick("ListScreenApp")}>
                    <div id="u172_div" className=""></div>
                    <div id="u172_text" className="navtext ">
                        <p><span>View Change Requests</span></p>
                    </div>
                </div>

                <div id="u174" className="fourtotal" style={{ cursor: 'pointer' }} onClick={() => handleClick("ArchivedChangesApp")}>
                    <div id="u174_div" className=""></div>
                    <div id="u174_text" className="navtext ">
                        <p><span>View Change Archive</span></p>
                    </div>
                </div>

                <div id="u173" className="fourtotal" style={{ cursor: 'pointer' }} onClick={() => handleClick("Login")}>
                    <div id="u173_div" className=""></div>
                    <div id="u173_text" className="navtext ">
                        <p><span>Log out</span></p>
                    </div>
                </div>


            </div>

        )
    } else if (props.navBarNumber == 2) {
        // NavBar for Review
        return (
            <div className="doubleNavBarGrid">
                <div className='emptyText'>&nbsp;</div>
                <div className="twoTotal" style={{ cursor: 'pointer' }} onClick={() => handleClick("ListScreenApp")}>
                        <p><span  className='navText'>View Change Requests</span></p>
        
                </div>
                <div className='emptyText'>&nbsp;</div>
                <div className="twoTotal" style={{ cursor: 'pointer' }} onClick={() => handleClick("Login")}>
                        <p><span  className='navText'>Log Out</span></p>
                </div>
                <div className='emptyText'>&nbsp;</div>
            </div>
        );
        //Stuff for View Change Requests, Logout
    } else if (props.navBarNumber == 3) {
        // NavBar for ChangeRequestsPage
        return (
            <div>
                <div id="u495" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("Entry")}>
                    <div id="u495_div" className=""></div>
                    <div id="u495_text" className="text ">
                        <p><span>Submit Request</span></p>
                    </div>
                </div>


                <div id="u496" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("Login")}>
                    <div id="u496_div" className=""></div>
                    <div id="u496_text" className="text ">
                        <p style={{'text-align': 'center'}}><span>Log out</span></p>
                    </div>
                </div>

                <div id="u499" className="ax_default button">
                    <div id="u499_div" className=""></div>
                    <div id="u499_text" className="text ">
                        <p><span>View Change Requests</span></p>
                    </div>
                </div>

                <div id="u497" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("ArchivedChangesApp")}>
                    <div id="u497_div" className=""></div>
                    <div id="u497_text" className="text ">
                        <p><span>View Change Request Archive</span></p>
                    </div>
                </div>
            </div>
        )

    } else {
        // NavBar for ArchivedChangesPage
        return (
            <div>
                <div id="u560" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("Entry")}>
                    <div id="u560_div" className=""></div>
                    <div id="u560_text" className="text ">
                        <p><span>Submit Request</span></p>
                    </div>
                </div>
                <div id="u579" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("ListScreenApp")}>
                    <div id="u579_div" className=""></div>
                    <div id="u579_text" className="text ">
                        <p><span>View Change Requests</span></p>
                    </div>
                </div>
                <div id="u578" className="ax_default button">
                    <div id="u578_div" className=""></div>
                    <div id="u578_text" className="text ">
                        <p><span>View Change Request Archive</span></p>
                    </div>
                </div>

                <div id="u561" className="ax_default button" style={{ cursor: 'pointer' }} onClick={() => handleClick("Login")}>
                    <div id="u561_div" className=""></div>
                    <div id="u461_text" className="text ">
                        <p><span>Log out</span></p>
                    </div>
                </div>

            </div>

        )
    }
}
export default NavBar;