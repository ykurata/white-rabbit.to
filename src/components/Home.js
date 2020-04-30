import React from "react";
import market from '../images/market.jpg';

const myStyle = {
  backgroundImage : `url(${market})` ,
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative',
  width: '100%',
	display: 'table',
	objectFit: 'cover',
	opacity: '0.8'
}

const Home = () => {
  return (
    <div id="home" style={myStyle}>
      <div className="landing-text">
        <h1 className="mb-4">white rabbit.to</h1>
        <h3>White rabbit is a group of hospitality professinal thats thinks outside of the box, <br></br> 
					to generate new income streams.
				</h3>
      </div>
    </div>
  );
};

export default Home;