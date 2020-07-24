import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ReactLogo from '../../assets/logo.svg';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

export const NavBar = () => {
  return (
    <div id="navigation-bar">
      <Navbar sticky="top" fixed="top">
        <Navbar.Brand>
          <img alt="" src={ReactLogo} width="50" height="50" />
          <h3>Nathaniel Santiago</h3>
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
