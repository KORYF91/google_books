import React from 'react';
import Home from './components/Home.js';
import {Router, Route, Switch} from 'react-router-dom';
import Saved from './components/Saved';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
