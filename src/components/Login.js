import React from "react";


function Login() {
  return (
    <div className="login-form">
      <div className="sign-in">
        <p className="form-heading">Login</p>
        <label htmlFor="username">username:</label>
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" />
        <br />
        <button>login</button>

        <p>Forgot your password?</p>
      </div>

      <div className="create-account">
        <p className="form-heading">Create Account</p>

        <label htmlFor="username">username:</label>
        <input type="text" id="username" />
        <br />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" />
        <br />
        <button>create account</button>
      </div>
    </div>
  );
}

export default Login;
