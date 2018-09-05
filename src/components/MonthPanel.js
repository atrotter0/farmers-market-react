import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const MonthPanel = (props) => {
  const panelStyle = {
    margin: '20px auto',
    width: '90%',
    fontFamily: 'Raleway'
  }
  const panelDetailsStyle = {
    fontFamily: 'Raleway',
    display: 'flex',
    flexWrap: 'wrap'
  }
  const chipStyle = {
    margin: '5px'
  }
  const monthMatch = props.month === props.currentMonth ?
    panelStyle.boxShadow = '4px 4px 50px #5c73f1' :
    panelStyle.boxShadow = '';
  return (
    <div>
      <ExpansionPanel style={panelStyle}>
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
