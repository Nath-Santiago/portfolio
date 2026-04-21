import React from 'react';
import './App.scss';
// import { Container } from 'react-bootstrap';
import { NavBar } from './components/navbar';
import { Body } from './components/myself';
import { Experience } from './components/experience';
import { CoreStrengths } from './components/corestrengths';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Projects } from './components/porfolios';
import { ContactMe } from './components/contactme';
import { Footer } from './components/footer/footer';
import { AboutMe } from './components/aboutme';

function App() {
  AOS.init();
  return (
    <div className="App">
      {/* <Container fluid className="main-container"> */}
        <NavBar></NavBar>
        <Body></Body>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <CoreStrengths></CoreStrengths>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>
      {/* </Container> */}
    </div>
  );
}

export default App;
