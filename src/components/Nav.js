import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const navStyles = {
  height: '80px',
  paddingTop: '25px',
  paddingLeft: '20px',
  fontSize: '2em',
  fontFamily: 'Josefin Sans',
  position: 'static'
};

const Nav = () => {
  return (
    <div>
      <AppBar style={navStyles}>Farmer's Market</AppBar>
    </div>
  )
}

export default Nav;
