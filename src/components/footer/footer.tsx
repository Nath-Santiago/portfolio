import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.scss';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id="footer">
      <Container fluid>
        <Row>
          <Col lg={9}>
            <span>© All Right Reserved by Nathaniel Santiago {year}</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
