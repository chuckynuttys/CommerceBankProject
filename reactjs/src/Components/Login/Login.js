import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (userId === "a" && password === "1") {
      navigate("/AC");
    } else if (userId === "b" && password === "2") {
      navigate("/LS");
    } else if (userId === "c" && password === "3") {
      navigate("/Review");
    } else {
      navigate("/Entry");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login Page</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <input
            type="text"
            placeholder="UserID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={handleSignIn}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Login;

