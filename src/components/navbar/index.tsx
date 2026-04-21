import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import nathLogo from '../../assets/icons/nathLogo.svg';
import './styles.scss';

export const NavBar = () => {
  return (
    <div id="navigation-bar">
      <Navbar expand="md" sticky="top" fixed="top">
        <Navbar.Brand>
          <img alt="my-logo" src={nathLogo} />
          <span className="hide-on-small">Nathaniel Santiago</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link
                activeClass="active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                ABOUT
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                EXPERIENCE
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="core-strengths"
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
                to="projects"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                PROJECTS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-75}
                duration={1500}
              >
                EDUCATION
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
