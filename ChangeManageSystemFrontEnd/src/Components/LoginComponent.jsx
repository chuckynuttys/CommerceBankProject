import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import { useNavigate } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username:'',
        password:'',
        shouldRedirect: false,
      }
      this.changeValue = this.changeValue.bind(this);
      this.requestUser = this.requestUser.bind(this);
      
    };
    changeValue=(e)=>{
      const nameValue = e.target.name;
      const value = JSON.stringify(e.target.value);
      this[nameValue] = value;
    }
    requestUser=(e)=>{
      e.preventDefault();
      console.log(this.username);
      let CurrentPassword = this.password;
      let CurrentUsername = this.username;
      CurrentPassword = CurrentPassword.replaceAll("\"", "");
      CurrentUsername = CurrentUsername.replaceAll("\"", "");
      fetch(`http://localhost:8080/users?username=${CurrentUsername}`)
      .then(data=>data.json())
      .then(data => {
        if (data.password == CurrentPassword) {
              document.cookie = "username=" + CurrentUsername;
              console.log(document.cookie);
              this.props.handleSignIn(true);
        } else {
          // Error for incorrect password. Change the Div Tag to shown for the incorrect Password field here.
          // Logging for debugging below.
          console.log("Incorrect Password");
          console.log(CurrentPassword);
          console.log(data.password);
        }
      })
    }
    render() {
        return (
                    <Form onSubmit={this.requestUser}>
                        <div id="u6" class="ax_default text_field" data-label="Input Field">
                          <div id="u6_div" class=""></div>
                          <input id="u6_input" type="text" class="u6_input" onChange = {this.changeValue} name="username"/>
                        </div>

                        <div id="u8" class="ax_default shape" data-label="Lower Label">
                        <div id="u8_div" class=""></div>
                        <div id="u8_text" class="text ">
                          <p><span>username</span></p>
                          </div>
                        </div>
                      
                        <div id="u10" class="ax_default text_field" data-label="Input Field">
                          <div id="u10_div" class=""></div>
                          <input id="u10_input" type="text" class="u10_input" onChange = {this.changeValue} name="password"/>
                        </div>
                        <div id="u12" class="ax_default shape" data-label="Lower Label">
                        <div id="u12_div" class=""></div>
                        <div id="u12_text" class="text ">
                            <p><span>Password</span></p>
                          </div>
                        </div>
                      
                      <button id="u13" class="ax_default primary_button" style={{cursor: 'pointer'}} type="submit"> 
                      <div id="u13_div" class=""></div>
                      <div id="u13_text" class="text ">
                        <p><span>Log In</span></p>
                        </div>
                      </button>
                    </Form>
    );
  }
}

export default LoginComponent;