import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Title } from '../title';
import gtmChart from '../../assets/gtm-chart2.png';
import undp from '../../assets/undp.png';
import { Element } from 'react-scroll';

export const Portfolios = () => {
  return (
    <div id="portfolios">
      <Element name="portfolios" className="element">
        <Container fluid>
          <div data-aos="fade-up">
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: '85%' }}>
                    <Title title={'PORTFOLIOS'}></Title>
                    <Card.Body>
                      <Row>
                        <Col lg={6} md={12}>
                          <div data-aos="flip-left" className="animation-div">
                            <img src={gtmChart} width="450" height="500"></img>
                            <h3>Green Tiger Markets Trading Chart</h3>
                          </div>
                        </Col>
                        <Col lg={6} md={12}>
                          <div data-aos="flip-right" className="animation-div">
                            <img src={undp} width="500" height="300"></img>
                            <h3>UNDP</h3>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Element>
    </div>
  );
};
