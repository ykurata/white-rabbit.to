import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Jumbotron />
    </div>
  );
}

export default App;
