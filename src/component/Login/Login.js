import React from "react";
import cricket from "./cricket.png"
import "./Login.css";


function Login() {
  return (
    <div className="login-main">
      <div className="login-left">
        <h1 className="login-title">BLOOMFIELD</h1>
        <p className="description">Bloomfield Cricket & Athletic club: <br></br>Member management System</p>
        <img className="login-img" src={cricket} alt="cricket" ></img>
      </div>
      {/* <div className="login-right">
        <LoginForm/>
       
      </div> */}
    </div>
  );
}



export default Login;
