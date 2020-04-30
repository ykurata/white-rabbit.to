import React from "react";
import girl from '../images/girl-pic.jpg';

import Navbar from './Navbar';

const Founder = () => {
  return (
    <div id="founder">
      <Navbar/>
      <div className="container padding">
        <div className="row">
          <div className="col-lg-12  text-center mb-5">
            <h2 className="display-4">The Founder</h2>
          </div>
        </div>
        <div className="row narrow">
          <div className="col-lg-6 col-md-12">
            <img className="rounded-circle avatar" src={girl} alt="me"></img>
          </div>
          <div className="col-lg-6 col-md-12">
            <blockquote className="blockquote">
              <p className="lead">
                I was born in Jamaica and became a Canadian citizen in 1975, when my family relocated to Canada.<br></br>
              </p>
              <p className="lead">
                My love for the hospitality industry was instilled in me by two generation of great professional chefs.<br></br>
              </p>
              <p className="lead">
                I started my career 30 years ago when I attend Strafford chef
                school and was trained buy top chef from around the world.<br></br>

                I have a running location for the last 25 years in Toronto,

                I also consulted for large corporate company.<br></br>

                I’ve position my career to maximize the use of trends and
                technology to enhance or solve the needs of the hospitality
                industry, which has given me the tools to think outside the box.<br></br>

                My passion for knowledge is a thirst that will never be quench.<br></br>
              </p>
              <footer className="blockquote-footer"><cite title="Source Title">Bryan Dawkins</cite></footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Founder;