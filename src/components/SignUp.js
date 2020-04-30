import React, { Component } from "react";


class SignUp extends Component {

  render() {
    return (
      <div id="signup">
        <div className="form">
          <form className="text-center border border-light pt-5">
            <p className="h4 mb-4">Sign Up</p>
            
            <div className="row">
              <div className="col">
                <input type="text" className="form-control mb-4 form-control-lg" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control mb-4 form-control-lg" placeholder="Last name" />
              </div>
            </div>
            
            <input type="email" name="email" id="defaultLoginFormEmail" className="form-control mb-4 form-control-lg" placeholder="E-mail" />
            
            <input type="password" name="password" id="password" className="form-control mb-4 form-control-lg" placeholder="Password" />
          
            <input type="password" name="password2" id="password2" className="form-control mb-4 form-control-lg" placeholder="Confirm Password" />
            <button className="btn btn-primary btn-block my-4" type="submit">Sign Up</button>
            <p>Already a member?
                <a href="/login">Log In</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;