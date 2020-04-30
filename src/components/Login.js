import React, { Component } from "react";


class Login extends Component {

  render() {
    return (
      <div id="login">
        <div className="form">
          <form className="text-center border border-light pt-5">
            <p className="h4 mb-4">Log In</p>
            
            <input type="email" name="email" id="defaultLoginFormEmail" className="form-control mb-4 form-control-lg" placeholder="E-mail" />
            
            <input type="password" name="password" id="password" className="form-control mb-4 form-control-lg" placeholder="Password" />
        
            <button className="btn btn-primary btn-block my-4" type="submit">Log In</button>
            <p>Not a member?
                <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;