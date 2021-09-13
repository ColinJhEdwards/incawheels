import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const NavB = () => {
  return (
    <StyledNav>
      <Navbar bg="none" expand="lg" className="noov navbar-light">
        <Navbar.Brand className="text logo">
          <span>Inca Wheels</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="relative">
              <span>Home</span>
            </Nav.Link>
            <Nav.Link href="#thevan" className="relative">
              <span>The Van</span>
            </Nav.Link>
            <Nav.Link href="#aboutus" className="relative">
              <span>About Us</span>
            </Nav.Link>
            <Nav.Link href="#destinations" className="relative">
              <span>Destinations</span>
            </Nav.Link>
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

  span {
    color: white;
    font-weight: bold;
  }
  .noov {
    width: 95%;
    margin: auto;

    .logo {
      font-size: 2rem;
    }
  }
  .relative {
    span {
      color: white;
      transition: all ease 0.5s;
      &:hover {
        color: #911f27;
      }
    }
  }
`;

export default NavB;
