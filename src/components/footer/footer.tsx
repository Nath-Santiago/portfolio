import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import twitter from '../../assets/twitter.svg';
// import fb from '../../assets/fb.svg';
// import linkedin from '../../assets/linkedin.svg';
// import ig from '../../assets/ig.svg';
// import github from '../../assets/github.svg';

export const Footer = () => {
  return (
    <div id="footer">
      <Container fluid>
        <Row>
          <Col lg={9}>
            <h5>© All Right Reserved by Nathaniel Santiago</h5>
          </Col>
          <Col lg={3}>
            {/* <img src={fb} width="30" height="30"></img>
            <img src={twitter} width="30" height="30"></img>
            <img src={ig} width="30" height="30"></img>
            <img src={linkedin} width="30" height="30"></img>
            <img src={github} width="30" height="30"></img> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
