import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';


export default function Dashboards() {



  return(
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="http://localhost:3000/"> <img src={require('./images/harmony.png')}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ></Nav.Link>
            <Nav.Link onClick={localStorage.clear()}>Logout</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}