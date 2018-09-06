import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Toys from '@material-ui/icons/Toys';

const Nav = () => {
  const navStyles = {
    height: '80px',
    paddingTop: '10px',
    fontSize: '2em',
    fontFamily: 'Josefin Sans',
    position: 'static'
  }
  const iconStyle = {
    color: '#fff',
    fontSize: '1.5em',
  }
  const navTitleStyle = {
    marginLeft: '8px'
  }
  return (
    <div>
      <AppBar style={navStyles}>
        <Toolbar>
          <IconButton>
            <Toys style={iconStyle} className='logo'/>
          </IconButton>
          <span style={navTitleStyle}>Farmer's Market</span>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;
