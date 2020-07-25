import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import ReactLogo from '../../assets/logo.svg';
import { Link } from 'react-scroll';

export const NavBar = () => {
  return (
    <div id="navigation-bar">
      <Navbar expand="md" sticky="top" fixed="top">
        <Navbar.Brand>
          <span>Nathaniel Santiago</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>ABOUT</Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                SKILLS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="portfolios"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                PORTFOLIOS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                CONTACT
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
