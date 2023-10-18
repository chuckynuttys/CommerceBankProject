import React, { Component } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import ChangeRequestDataService from '../Service/ChangeRequestDataService';

var userID;

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: [],
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        console.log(this.state.userID);
        if (this.state.userID == -1) {
            return
        }
    }
    onSubmit(values) {
        let username = ChangeRequestDataService.findByID();
        if (username == this.state.userID) {
            document.cookie = "username=" + username;
            console.log(username);
            this.props.history.push('/Entry');
        }
        

    }



    render() {
        
        let { userID, password} = this.state;
        return (
            <Formik initialValues={{
                userID,
                password
              }}>
                {
                  (props) => (
                    <Form>
                      <fieldset id="u6" class="ax_default text_field" data-label="Input Field">
                        <div id="u6_div" class=""></div>
                        <input id="u6_input" type="text" value="" class="u6_input"/>
                      </fieldset>
                      <div id="u8" class="ax_default shape" data-label="Lower Label">
                      <div id="u8_div" class=""></div>
                      <div id="u8_text" class="text ">
                        <p><span>UserID</span></p>
                        </div>
                      </div>
        
                      <fieldset id="u10" class="ax_default text_field" data-label="Input Field">
                        <div id="u10_div" class=""></div>
                        <input id="u10_input" type="text" value="" class="u10_input"/>
                      </fieldset>
                      <div id="u12" class="ax_default shape" data-label="Lower Label">
                      <div id="u12_div" class=""></div>
                      <div id="u12_text" class="text ">
                          <p><span>Password</span></p>
                        </div>
                      </div>
                      <div id="u13" class="ax_default primary_button" style={{cursor: 'pointer'}} onClick={this.onSubmit}> 
                      <div id="u13_div" class=""></div>
                      <div id="u13_text" class="text ">
                        <p><span>Log In</span></p>
                        </div>
                      </div>
                    </Form>
                  )
                }
              </Formik>
        )
    }
}

export default LoginComponent;