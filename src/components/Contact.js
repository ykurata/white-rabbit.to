import React, { Component } from "react";
import MapContainer from './MapContainer';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
      <div className="container padding">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-4">Contact</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <MapContainer/>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default Contact;