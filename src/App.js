import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jumbotron from './components/Jumbotron';
import Work from './components/Work';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Jumbotron />
      <Work />
    </div>
  );
}

export default App;
