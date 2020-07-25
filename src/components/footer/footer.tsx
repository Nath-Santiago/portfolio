import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import twitter from '../../assets/twitter.svg';
// import fb from '../../assets/fb.svg';
// import linkedin from '../../assets/linkedin.svg';
// import ig from '../../assets/ig.svg';
// import github from '../../assets/github.svg';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id="footer">
      <Container fluid>
        <Row>
          <Col lg={9}>
            <h5>© All Right Reserved by Nathaniel Santiago {year}</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
