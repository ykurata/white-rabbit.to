import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jumbotron from './components/Jumbotron';
import Work from './components/Work';
import Membership from './components/Membership';
import Regstration from './components/Registration';
import Registration from './components/Registration';

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
    </div>
  );
}

export default App;
