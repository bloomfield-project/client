import React from "react";

function FogotPassForm() {
  return (
    <div className="login-details">
      <h2>Fogot Password</h2>
      <form>
        <div className="form-data">
          <label>Email</label>
          <input type="email"></input>
        </div>

        {/* <div className="form-data">
          <label>Password</label>
          <input type="password"></input>
        </div> */}

        <div class="d-grid gap-2 col-6 mx-auto form-data">
          <button class="btn btn-primary" type="button" >
            Submit
          </button> 
        </div>
      </form>
    </div>
  );
}

export default FogotPassForm;
