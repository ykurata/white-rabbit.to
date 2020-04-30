import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">White Rabbit.to</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">News Letter</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                  <div className="login">
                    <a className="nav-link" href="#contact">Log In</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;