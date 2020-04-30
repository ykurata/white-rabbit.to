import React, { Component } from "react";

class About extends Component {

  render() {
    return (
      <div id="about">
        <div className="container padding offset" >
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h1 className="headline">Value of the proposition</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <h5 className="card-header text-center">
                  Association
                </h5>
                <div className="card-body">
                  <p className="card-text">
                  This association is build to generate income for your business, using existing
                  infrastructure. While increasing your buying power and your voice in the hospitality industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <h5 className="card-header text-center">
                  Risk
                </h5>
                <div className="card-body">
                  <p className="card-text">
                  We will be lowering your venture risk with a low overhead and a high cash
                  flow, revenue factor to increase your revenue statement.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <h5 className="card-header text-center">
                  Benefit
                </h5>
                <div className="card-body">
                  <p className="card-text">
                  Turning a negative impact to a positive twist.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card">
                <h5 className="card-header text-center">
                  The path
                </h5>
                <div className="card-body">
                  <p className="card-text">
                  We will be using your location as outlet for an online grocery store.
                  Also setting up a platform to promote your location and your
                  specialize items that your proud of
                  </p>
                </div>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    )
  }
}

export default About;