// import React from "react";
import React, { useState } from "react";
import validator from "validator";
import Login from "../Login";
import {  Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

//npm install validator
// BsFillEyeFill
function LoginForm() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email ");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  return (
    <div className="login-main">
      <Login />

      <div className="login-right">
        <div className="login-details">
          <h2>Log in</h2>
          <form>
            <div className="form-data">
              <label>Email</label>
              <input
                type="email"
                required
                onChange={(e) => validateEmail(e)}
              ></input>
              <label onClick={handleShow}>
                {/* empty lable  */}
              </label>
              <br></br>
              <label> </label>
              <span>{emailError}</span>
            </div>

            <div className="form-data">
              <label>Password</label>

              {/* <div className="password"> */}
              <input type={show ? "text" : "password"} required></input>

              <label onClick={handleShow} className="eye">
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </label>

              {/* <AiOutlineEyeInvisible></AiOutlineEyeInvisible>/ */}
            </div>
            {/* </div> */}

            <div class="d-grid gap-2 col-6 mx-auto form-data">
              <button class="btn btn-primary" type="button">
                Log in
              </button>
            </div>
          </form>
          <p>
            Fogot your Password?{" "}
            <nav>
              <Link to="/FogotPassword">Fogot Password</Link>
            </nav>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
