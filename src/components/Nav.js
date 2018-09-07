import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Toys from '@material-ui/icons/Toys';
import Button from '@material-ui/core/Button';

const Nav = () => {
  const navStyles = {
    height: '80px',
    paddingTop: '10px',
    fontSize: '2em',
    fontFamily: 'Josefin Sans',
    position: 'static',
  }
  const toolbarStyle = {
  }
  const iconStyle = {
    color: '#fff',
    fontSize: '1.5em',
  }
  const navTitleStyle = {
    marginLeft: '8px'
  }
  const linkBoxOuterStyles = {
    flexGrow: '1',
  }
  const linkBoxInnerStyles = {
    float: 'right'
  }
  const linkStyles = {
    color: '#fff',
    textDecoration: 'none'
  }
  const buttonStyles = {
    fontFamily: 'Josefin Sans',
    color: '#fff',
    fontSize: '0.5em'
  }
  return (
    <div>
      <AppBar style={navStyles}>
        <Toolbar style={toolbarStyle}>
          <IconButton>
            <Toys style={iconStyle} className='logo'/>
          </IconButton>
          <Link to='/' style={linkStyles}>
            <span style={navTitleStyle}>Farmer's Market</span>
          </Link>
          <div style={linkBoxOuterStyles}>
            <div style={linkBoxInnerStyles}>
              <Link to='/about' style={linkStyles}>
                <Button style={buttonStyles}>About</Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;
