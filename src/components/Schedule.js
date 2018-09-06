import React from 'react';
import DayCard from './DayCard';
import '../styles/responsive.css';
import currentSchedule from '../scheduleData';

const Schedule = () => {
  const scheduleColumn = {
    maxWidth: '525px'
  };
  const weekDay = new Date().toLocaleString('en-us', { weekday: "long"});
  const marketSchedule = currentSchedule();
  return (
    <div style={scheduleColumn} className='scheduleColumn'>
    {marketSchedule.map((market, index) =>
      <DayCard
        day={market.day}
        location={market.location}
        hours={market.hours}
        booth={market.booth}
        weekDay={weekDay}
        key={index}
      />
    )}

    </div>
  )
}

export default Schedule;
