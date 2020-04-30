import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Founder from './components/Founder';
import Blog from './components/Blog';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Founder} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
