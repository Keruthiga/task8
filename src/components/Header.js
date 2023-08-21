import React from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">CodeSpace</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="text-light">Home</Nav.Link>
          <Nav.Link href="/about" className="text-light">About</Nav.Link>
          <Nav.Link href="/benefits" className="text-light">Benefits</Nav.Link>
          <Nav.Link href="/blog" className="text-light">Blog</Nav.Link>
          <Nav.Link href="/view" className="text-light">View</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
