import React from "react";
import './Login.css'

const Login = () =>{

    return(
        <div className="container">
            <div className="header">
                <div className="text">Login Page</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="UserID"/>
                </div>
                <div className="input">
                    <input type="text" placeholder="Password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign In</div>
            </div>
        </div>

        
    )
}

export default Login