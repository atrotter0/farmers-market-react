import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Nav from './Nav';
import Schedule from './Schedule';
import Produce from './Produce';

class FarmersMarketApp extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Schedule />
          <Produce />
        </div>
      </div>
    );
  }
}

export default FarmersMarketApp;
