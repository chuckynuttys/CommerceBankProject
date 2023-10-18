import React, { Component } from 'react';
import {Formik, Field, ErrorMessage} from 'formik';
import ChangeRequestDataService from '../Service/ChangeRequestDataService';

var userID;

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                userID: null,
                password: null
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        
    }
    onSubmit(userID, password) {
        console.log("Success");
        <div>test</div>
        ChangeRequestDataService.get(userID)
        .then(response => {
            if (response.data.userID == userID && response.data.password == password) {
                document.cookie = "id=" + userID;
                <div>Hello</div>
            } else {
                <div>Helo</div>
            }
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        })
    }



    render() {
        
        const {currentUser} = this.state;
        return (
            
                    <form>
                      <fieldset id="u6" class="ax_default text_field" data-label="Input Field">
                        <div id="u6_div" class=""></div>
                        <input id="u6_input" type="text" class="u6_input" value={currentUser.userID}/>
                      </fieldset>
                      <div id="u8" class="ax_default shape" data-label="Lower Label">
                      <div id="u8_div" class=""></div>
                      <div id="u8_text" class="text ">
                        <p><span>UserID</span></p>
                        </div>
                      </div>
        
                      <fieldset id="u10" class="ax_default text_field" data-label="Input Field">
                        <div id="u10_div" class=""></div>
                        <input id="u10_input" type="text" class="u10_input" value={currentUser.password}/>
                      </fieldset>
                      <div id="u12" class="ax_default shape" data-label="Lower Label">
                      <div id="u12_div" class=""></div>
                      <div id="u12_text" class="text ">
                          <p><span>Password</span></p>
                        </div>
                      </div>
                      <button id="u13" class="ax_default primary_button" style={{cursor: 'pointer'}} onClick={this.onSubmit}> 
                      <div id="u13_div" class=""></div>
                      <div id="u13_text" class="text ">
                        <p><span>Log In</span></p>
                        </div>
                      </button>
                    </form>
                  )
    }
}

export default LoginComponent;