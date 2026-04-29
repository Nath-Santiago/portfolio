import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import nathLogo from '../../assets/icons/nathLogo.svg';
import './styles.scss';

const NAV_SCROLL_OFFSET = -75;
const ACTIVE_SECTION_OFFSET = 120;
const PAGE_BOTTOM_THRESHOLD = 8;

const navigationItems = [
  {
    label: 'ABOUT',
    to: 'about-me',
    offset: NAV_SCROLL_OFFSET,
  },
  {
    label: 'EXPERIENCE',
    to: 'experience',
    offset: NAV_SCROLL_OFFSET,
  },
  {
    label: 'SKILLS',
    to: 'core-strengths',
    offset: NAV_SCROLL_OFFSET,
  },
  {
    label: 'PROJECTS',
    to: 'projects',
    offset: NAV_SCROLL_OFFSET,
  },
  {
    label: 'EDUCATION',
    to: 'education',
    offset: NAV_SCROLL_OFFSET,
  },
  {
    label: 'CONTACT',
    to: 'contact-me',
    offset: NAV_SCROLL_OFFSET,
  },
];

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navigationItems[0].to);

  useEffect(() => {
    const sectionIds = navigationItems.map(({ to }) => to);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + ACTIVE_SECTION_OFFSET;
      const reachedPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - PAGE_BOTTOM_THRESHOLD;

      if (reachedPageBottom) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      let currentSection = sectionIds[0];

      sectionIds.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);

        if (!sectionElement) {
          return;
        }

        if (sectionElement.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleMenuClose = (sectionId?: string) => {
    if (sectionId) {
      setActiveSection(sectionId);
    }

    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((currentState) => !currentState);
  };

  const handleLogoClick = () => {
    handleMenuClose(navigationItems[0].to);
    scroll.scrollToTop({
      duration: 900,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div id="navigation-bar">
      <header className="site-navbar">
        <div className="navbar-brand">
          <button
            type="button"
            className="navbar-logo-button"
            aria-label="Go to introduction section"
            onClick={handleLogoClick}
          >
            <img alt="my-logo" src={nathLogo} />
            {/* <span className="hide-on-small">Nathaniel Santiago</span> */}
          </button>
        </div>
        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-controls="responsive-navbar-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={handleMenuToggle}
        >
          <span className="menu-toggle-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <nav
          id="responsive-navbar-nav"
          className={`nav-menu${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.to}
              className={`nav-link${activeSection === item.to ? ' active' : ''}`}
              to={item.to}
              smooth={true}
              offset={item.offset}
              duration={1500}
              onClick={() => handleMenuClose(item.to)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
};
