import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const NavB = () => {
  return (
    <StyledNav>
      <Navbar bg="none" expand="lg" className="noov navbar-dark">
        <Navbar.Brand className="text logo">
          <span>Inca Wheels</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="relative">Home</Nav.Link>
            <Nav.Link className="relative">Courses</Nav.Link>
            <Nav.Link className="relative">Our Teachers</Nav.Link>
            <Nav.Link className="relative">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  position: absolute;
  width: 100%;
  z-index: 99;
  .noov {
    width: 95%;
    margin: auto;
  }
`;

export default NavB;
