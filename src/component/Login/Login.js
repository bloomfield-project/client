import React, { useState } from "react";
import LoginForm from "./Login Forms/LoginForm";
import FogotPassForm from "./Login Forms/FogotPassForm";
import cricket from "./cricket.png"
import "./Login.css";
import ResetPassForm from "./Login Forms/ResetPassForm";

var component;


function Login() {
  return (
    <div className="login-main">
      <div className="login-left">
        <h1 className="title">BLOOMFIELD</h1>
        <p className="description">Bloomfield Cricket & Athletic club: <br></br>Member management System</p>
        <img src={cricket} alt="cricket" ></img>
      </div>
      <div className="login-right">

        <LoginForm/>
        {/* <ResetPassForm/> */}
       
      </div>
    </div>
  );
}



export default Login;
