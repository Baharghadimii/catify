import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.scss';
import Logo from './Logo'

const NavBar = (props) => {

  const onClick = (display) => {
    props.show(display);
  }

  return (
    <Navbar className='nav' expand="lg">
      <Logo />
      <Navbar.Brand className='brand' href="#home">Catify</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link style={{ color: '#7A6181' }} onClick={() => onClick('LIST')}>All Cats</Nav.Link>
        <Nav.Link style={{ color: '#7A6181' }} onClick={() => onClick('ITEM')}>My Cats</Nav.Link>
      </Nav>
      <Button className="btn-nav" variant="outline-success">Sign In</Button>
    </Navbar >
  )

}
export default NavBar;