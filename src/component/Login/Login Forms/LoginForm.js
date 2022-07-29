import React from "react";


function LoginForm() {
  
  return (
    <div className="login-details">
      <h2>Log in</h2>
      <form>
        <div className="form-data">
          <label>Email</label>
          <input type="email"></input>
        </div>

        <div className="form-data">
          <label>Password</label>
          <input type="password"></input>
        </div>

        <div class="d-grid gap-2 col-6 mx-auto form-data">
          <button class="btn btn-primary" type="button">
            Log in
          </button>
        </div>
      </form>
      <p>Fogot your Password? </p>
    </div>
  );
}

export default LoginForm;
