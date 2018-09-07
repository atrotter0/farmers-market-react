import React from 'react';
import Schedule from './Schedule';
import Produce from './Produce';

const Market = () => {
  const contentStyles = {
    maxWidth: '1500px'
  }
  return(
    <div style={contentStyles}>
      <Schedule />
      <Produce />
    </div>
  );
}

export default Market;