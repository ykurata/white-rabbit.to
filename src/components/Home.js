import React from "react";
import market from '../images/veggies3.jpg';

import Navbar from './Navbar';
import About from './About';
import Value from './Value';
import Jumbotron from './Jumbotron';
import Work from './Work';
import Membership from './Membership';
import Registration from './Registration';
import Contact from './Contact';

const myStyle = {
  backgroundImage : `url(${market})` ,
  backgroundSize: 'cover',
  height: '100vh',
  position: 'relative',
  width: '100%',
	display: 'table',
	opacity: '0.8'
}

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
       <div id="home" style={myStyle}>
        <div className="landing-text">
          <h1 className="mb-4">The white rabbit.to</h1>
        </div>
      </div>
      <About/>
      <Value/>
      <Jumbotron/>
      <Work/>
      <Membership/>
      <Registration/>
      <Contact/> 
    </div>
  );
};

export default Home;