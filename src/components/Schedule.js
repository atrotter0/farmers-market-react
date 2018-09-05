import React from 'react';
import DayCard from './DayCard';
import '../styles/responsive.css';

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

const Schedule = () => {
  const scheduleColumn = {
    maxWidth: '525px'
  };

  const weekDay = new Date().toLocaleString('en-us', { weekday: "long"});
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
