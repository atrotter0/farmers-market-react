import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Nav from './Nav';
import Schedule from './Schedule';
import Produce from './Produce';

class FarmersMarketApp extends Component {
  render() {
    const bodyStyle = {
      maxWidth: '1500px'
    }
    return (
      <div>
        <Nav />
        <div style={bodyStyle}>
          <Schedule />
          <Produce />
        </div>
      </div>
    );
  }
}

export default FarmersMarketApp;
