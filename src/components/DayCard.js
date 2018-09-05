import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const DayCard = (props) => {
  const dayCardBox = {
    width: '70%',
    margin: '20px auto',
    fontFamily: 'Raleway'
  }

  const dayCardHeader = {
    margin: '10px 20px',
    textAlign: 'center',
    fontSize: '1.2em',
    fontWeight: 'bold'
  }

  const dayCardContent = {
    textAlign: 'center'
  }

  const hrStyle = {
    width: '50%',
    height: '2px',
    backgroundColor: '#000',
    border: '0px',
    marginBottom: '20px'
  }
  return (
    <div>
      <Card style={dayCardBox}>
        <CardContent>
          <div style={dayCardHeader}>
            {props.day}
            <hr style={hrStyle}/>
          </div>
          <div style={dayCardContent}>
            <p>{props.location} - {props.booth}</p>
            <p>{props.hours}</p>
          </div>
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
