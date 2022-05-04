import React from 'react';

const Loginpage = () => {
  return (
    <div>
      <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>

            <p>Please enter your credentials to login.</p>

          </div>
        </div>
        <form className="login-form">
          <input type="text" placeholder="username"/>
          <input type="password" placeholder="password"/>
          <button>login</button>
          <button style="margin-top: 15px;">SIGN UP</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Loginpage;
