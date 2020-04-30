import React from "react";

const Work = () => {
  return (
    <div id="work">
      <div className="container padding">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-4">How it works</h2>
          </div>
        </div>
        <div className="row work-row">
          <div className="col-sm work-item text-center">
            <h4 className="title">Location</h4>
            <p className="lead"> 
            Your orders come in two hours before your shut off time. So you can add your
            restaurant needs. All costumer orders are paidin full . 
            You then will get a invoice showing, minus costumer order ,your
            profit margin, plus your add on location items .
            </p>
          </div>
          <div className="col-sm work-item text-center middle">
            <h4 className="title">Platform</h4>
            <p className="lead">
            The platform is to be costumer friendly on both end for the costumer and
            end user. We have packed the app with ton of interactive features to keep
            the costumer and you inform and happy.
            </p> 
          </div>
          <div className="col-sm work-item text-center">
            <h4 className="title">Comsumer</h4>
            <p className="lead">
            They get to support their local restaurant. They get Cheaper food prices, Menu suggestions, prepared food items. 
            All at restaurant quality and services.
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Work;