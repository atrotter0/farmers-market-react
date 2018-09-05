import React from 'react';
import DayCard from './DayCard';

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

const scheduleColumn = {
  display: 'inline-block',
  width: '35%',
  outline: '1px solid red'
};

const Schedule = () => {
  return (
    <div style={scheduleColumn}>
    {marketSchedule.map((market, index) =>
      <DayCard
        day={market.day}
        location={market.location}
        hours={market.hours}
        booth={market.booth}
      />
    )}

    </div>
  )
}

export default Schedule;
