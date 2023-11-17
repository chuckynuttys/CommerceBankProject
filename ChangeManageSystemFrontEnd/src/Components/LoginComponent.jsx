import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import { makeCookie } from '../files/CookieManagement';



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
      let CurrentPassword = this.password;
      let CurrentUsername = this.username;
      
      CurrentPassword = CurrentPassword.replaceAll("\"", "");
      CurrentUsername = CurrentUsername.replaceAll("\"", "");
      fetch(`http://localhost:8080/users?username=${CurrentUsername}`)
      .then(data=> {
        return data.json();
      })
      .then(post => {
        console.log(post.username);
        console.log(post.password);
        if (post.username == CurrentUsername) {
          document.getElementById("u15").setAttribute("style", "visibility: hidden");
          if (post.password == CurrentPassword) {
            document.getElementById("u15").setAttribute("style", "visibility: hidden");
              
              makeCookie("id", post.id);
              makeCookie("authorizationLevel", post.authorizationLevel);
              console.log(document.cookie);
              this.props.handleSignIn(true);
          } else {
          // Error for incorrect password. Change the Div Tag to shown for the incorrect Password field here.
          this.setState({ incorrectPassword: true, incorrectUserId: false });
          // Logging for debugging below.

          console.log("Incorrect Password");
          console.log(CurrentPassword);
          document.getElementById("u15").setAttribute("style", "visibility: visible");
          }
        } else {
          // Error for incorrect userID. Change the div tag to shown for the incorrect userID field here.
          this.setState({ incorrectUserId: true, incorrectPassword: false });
          // Logging for debugging below.
          console.log("Incorrect userId");
          console.log(CurrentUsername);
          document.getElementById("u15").setAttribute("style", "visibility: visible");
        } 
        
      })
      .catch(error => {
        console.error(error);
        this.setState({ incorrectUserId: true, incorrectPassword: false });
    });
    }
    render() {
        return (
                    <Form onSubmit={this.requestUser}>
                        <div id="u6" class="ax_default text_field" data-label="Input Field">
                          <div id="u6_div" class=""></div>
                          <input id="u6_input" type="text" class="u6_input" onChange = {this.changeValue} name="username" placeholder='UserID'/>
                        </div>
                        {this.state.incorrectUserId && (
                    <div className="error-message">Incorrect userId</div>
                        )}
                        

                        <div id="u10" class="ax_default text_field" data-label="Input Field">
                          <div id="u10_div" class=""></div>
                          <input id="u10_input" type="text" class="u10_input" onChange = {this.changeValue} name="password" placeholder='Password'/>
                        </div>
                        {this.state.incorrectPassword && (
                    <div className="error-message">Incorrect Password</div>
                        )}

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