import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.scss';

const NavBar = (props) => {

  return (
    <Navbar className='nav' expand="lg">
      <Navbar.Brand className='brand' href="#home">Catify</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link style={{ color: '#7A6181' }} href="#home">All Cats</Nav.Link>
        <Nav.Link style={{ color: '#7A6181' }} href="#link">My Cats</Nav.Link>
      </Nav>
      <Button className="btn-nav" variant="outline-success">Sign In</Button>
    </Navbar >
  )

}
export default NavBar;