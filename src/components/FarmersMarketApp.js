import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import '../styles/logo.css';
import Nav from './Nav';
import Market from './Market';
import About from './About';

class FarmersMarketApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Market} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    );
  }
}

export default FarmersMarketApp;
