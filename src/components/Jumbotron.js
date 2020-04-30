import React from "react";
// import market from '../images/market.jpg';

// const myStyle = {
//   backgroundImage : `url(${market})` ,
//   backgroundSize: 'cover',
//   height: '100vh',
//   position: 'relative',
//   width: '100%',
// 	display: 'table',
// 	objectFit: 'cover',
// 	opacity: '0.6'
// }

const Jumbotron = () => {
  return (
    <div id="jumbotron">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-4">Underline Magic</h1>
          <p className="lead">
            These unfortunate times we live in has force our hands, to think outside the box.<br></br>
            I’m confidence their is no more suitable industry up for this task! <br></br>
            Logistics is in our nature, quality control, time management<br></br> 
            and problem solving these are all characteristics that the hospitality industry is built on. <br></br>
            90% of location has all the infrastructure to be a White Rabbit member.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;