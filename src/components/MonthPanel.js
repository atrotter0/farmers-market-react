import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const MonthPanel = (props) => {
  const monthMatch = props.month === props.currentMonth;
  const marker = monthMatch ? '5px solid #5f2126' : '';
  const panelStyle = {
    margin: '20px',
    width: '90%',
    fontFamily: 'Raleway',
    borderLeft: marker
  }
  const panelDetailsStyle = {
    fontFamily: 'Raleway',
    display: 'flex',
    flexWrap: 'wrap'
  }
  const chipStyle = {
    margin: '5px'
  }
  return (
    <div>
      <ExpansionPanel style={panelStyle} defaultExpanded={monthMatch}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {props.month}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={panelDetailsStyle}>
          {props.produceList.map((produce, index) =>
            <Chip
              label={produce}
              key={index}
              style={chipStyle}
            />
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default MonthPanel;
