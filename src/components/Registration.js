import React from "react";

const Registration = () => {
  return (
    <div id="registration">
      <div className="container padding">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-4">Registration</h2>
          </div>
        </div>
        <div className="register text-center">
          <p className="lead register-inner">
          Registration is a simple process! We first make sure you meet all health and safety standers and white rabbit
          standers, with a quick and simple site visit. You need a clean working vehicle
          first and last month membership fee which is <span style={{ fontWeight: "bold"}}>$500</span> plus HST a month.
          Every thing is included for one price.
          </p>
          <button type="button" className="btn btn-primary btn-lg mt-5">Register</button>
        </div>
      </div>
    </div>  
  );
};

export default Registration;