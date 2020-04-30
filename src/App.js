import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Founder from './components/Founder';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Founder} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
