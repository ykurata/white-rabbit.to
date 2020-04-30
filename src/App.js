import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jumbotron from './components/Jumbotron';
import Work from './components/Work';
import Membership from './components/Membership';
import Registration from './components/Registration';
import Founder from './components/Founder';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Jumbotron />
      <Work />
      <Membership />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
