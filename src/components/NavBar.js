import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavBar.scss';

const NavBar = (props) => {

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">Catify</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">All Cats</Nav.Link>
          <Nav.Link href="#link">My Cats</Nav.Link>
        </Nav>
        <Button variant="outline-success">Sign In</Button>
      </Navbar.Collapse>
    </Navbar>
  )

}
export default NavBar;