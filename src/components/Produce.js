import React from 'react';
import MonthPanel from './MonthPanel';
import availableProduce from '../produceData';

const Produce = () => {
  const data = availableProduce();
  const produceColumn = {
    display: 'inline-block',
    width: '65%',
    verticalAlign: 'top'
  }
  const currentMonth = new Date().toLocaleString('en-us', { month: "long"});
  return (
    <div style={produceColumn}>
      {data.map((data, index) =>
        <MonthPanel
          month={data.month}
          produceList={data.selection}
          currentMonth={currentMonth}
          key={index}
        />
      )}
    </div>
  );
}

export default Produce;
