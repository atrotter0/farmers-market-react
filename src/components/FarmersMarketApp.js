import React, { Component } from 'react';
import '../styles/logo.css';
import Nav from './Nav';
import Schedule from './Schedule';
import Produce from './Produce';

class FarmersMarketApp extends Component {
  render() {
    const contentStyles = {
      maxWidth: '1500px'
    }
    return (
      <div>
        <Nav />
        <div style={contentStyles}>
          <Schedule />
          <Produce />
        </div>
      </div>
    );
  }
}

export default FarmersMarketApp;
