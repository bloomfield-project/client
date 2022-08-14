import React, { useState } from "react";
import validator from "validator";
import Login from "../Login";

function FogotPassForm() {
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
          <h2>Fogot Password</h2>
          <form>
            <div className="form-data">
              <label>Email</label>
              <input
                type="email"
                required
                onChange={(e) => validateEmail(e)}
              ></input>
              <br></br>
              <label> </label>
              <span className="validate-msg">{emailError}</span>
            </div>

            <div class="d-grid gap-2 col-6 mx-auto form-data">
              <button class="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FogotPassForm;
