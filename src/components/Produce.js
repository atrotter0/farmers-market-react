import React from 'react';

const Produce = () => {
  const produceColumn = {
    display: 'inline-block',
    width: '65%',
    outline: '1px solid black',
    verticalAlign: 'top'
  }
  return (
    <div style={produceColumn}>
      Produce
    </div>
  );
}

export default Produce;
