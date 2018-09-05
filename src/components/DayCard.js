import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const DayCard = (props) => {
  return (
    <div>
      <Card>
        <CardContent>
          {props.day}
          {props.location}
          {props.hours}
          {props.booth}
        </CardContent>
      </Card>
    </div>
  );
}

DayCard.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default DayCard;
