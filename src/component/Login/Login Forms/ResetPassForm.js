import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function ResetPassForm() {
  return (
    <div className="login-details">
      <h2>Reset Password</h2>
      <form>
        <div className="form-data">
          <label>New Password</label>
          <input type="email"></input>
        </div>

        <div className="form-data">
          <label>Confirm Password</label>
          <input type="password"></input>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto form-data">
          <button class="btn btn-primary" type="button" >
            Log in
          </button> 
        </div>
      </form>
    </div>
  );
}

export default ResetPassForm;
