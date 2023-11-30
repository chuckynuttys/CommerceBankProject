import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { makeCookie } from '../files/Functions/CookieManagement';



class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      shouldRedirect: false,
    }
    this.changeValue = this.changeValue.bind(this);
    this.requestUser = this.requestUser.bind(this);

  };
  changeValue = (e) => {
    const nameValue = e.target.name;
    const value = JSON.stringify(e.target.value);
    this[nameValue] = value;
  }
  requestUser = (e) => {
    e.preventDefault();
    let CurrentPassword = this.password;
    let CurrentUsername = this.username;

    CurrentPassword = CurrentPassword.replaceAll("\"", "");
    CurrentUsername = CurrentUsername.replaceAll("\"", "");
    fetch(`http://localhost:8080/users?username=${CurrentUsername}`)
      .then(data => {
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
            makeCookie("username", post.username);
            makeCookie("name", post.firstName + " " + post.lastName);
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
      <Form className= "formLogin" onSubmit={this.requestUser}>
        <div className='inputBox'>
          <input className="inputText" onChange={this.changeValue} name="username" placeholder='UserID' />
      </div>
        {this.state.incorrectUserId && (
          <div className="error-message">Incorrect userId</div>
        )}


        <div className='inputBox'>
          <input type="text" className="inputText" onChange={this.changeValue} name="password" placeholder='Password' />
        </div>
        {this.state.incorrectPassword && (
          <div className="error-message">Incorrect Password</div>
        )}

<div className='inputBox'>
<input className="loginSubmit" type="submit" value="Login" onClick={this.execute} />
</div>
      </Form>
    );
  }
}

export default LoginComponent;