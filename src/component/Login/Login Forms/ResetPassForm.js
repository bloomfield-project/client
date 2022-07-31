import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import Login from "../Login";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


function ResetPassForm() {

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  
  };
  return (
    <div className="login-main">
      <Login />

      <div className="login-right">
        <div className="login-details">
          <h2>Reset Password</h2>
          <form>
          <div className="form-data">
              <label>Password</label>

              {/* <div className="password"> */}
              <input type={show ? "text" : "password"} required>
              </input>

              <label onClick={handleShow} className="eye">
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </label>

              
              {/* <AiOutlineEyeInvisible></AiOutlineEyeInvisible>/ */}
            </div>
            <div className="form-data">
              <label>Password</label>

              {/* <div className="password"> */}
              <input type={show ? "text" : "password"} required>
              </input>

              <label onClick={handleShow} className="eye">
                {show ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </label>

              
              {/* <AiOutlineEyeInvisible></AiOutlineEyeInvisible>/ */}
            </div>
            {/* <div className="form-data">
              <label>New Password</label>
              <input type="email"></input>
            </div>

            <div className="form-data">
              <label>Confirm Password</label>
              <input type="password"></input>
            </div> */}

            <div class="d-grid gap-2 col-6 mx-auto form-data">
              <button class="btn btn-primary" type="button">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ResetPassForm;
