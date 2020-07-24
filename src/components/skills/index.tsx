import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import html5 from '../../assets/html5.svg';
import css5 from '../../assets/css3.svg';
import js from '../../assets/javascript.svg';
import angular from '../../assets/angular.svg';
import react from '../../assets/react.svg';
import graphql from '../../assets/graphql.svg';
import redux from '../../assets/redux.svg';
import node from '../../assets/nodejs-icon.svg';
import git from '../../assets/git.svg';
import gcp from '../../assets/gcp.svg';
import aws from '../../assets/aws.svg';
import photoshop from '../../assets/photoshop.svg';
import postgresql from '../../assets/postgresql.svg';
import { Element } from 'react-scroll';

import { Title } from '../title';

export const Skills = () => {
  return (
    <div id="skills">
      <Element name="skills" className="element">
        <Container fluid>
          <div data-aos="fade-up">
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: '85%' }}>
                    <Title title={'SKILLS'}></Title>
                    <Card.Body>
                      {/* first row */}
                      <Row>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-down-right"
                            className="animation-div"
                          >
                            <img src={html5} width="200" height="200"></img>
                            <h3>HTML</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-down" className="animation-div">
                            <img src={css5} width="200" height="200"></img>
                            <h3>CSS</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-down-left"
                            className="animation-div"
                          >
                            <img src={js} width="200" height="200"></img>
                            <h3>JAVASCRIPT</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* second row */}
                      <Row>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-right" className="animation-div">
                            <img src={react} width="180" height="180"></img>
                            <h3>REACT</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-left" className="animation-div">
                            <img src={angular} width="180" height="180"></img>
                            <h3>ANGULAR</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* third row */}
                      <Row>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-up-right"
                            className="animation-div"
                          >
                            <img src={redux} width="180" height="180"></img>
                            <h3>REDUX</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img src={photoshop} width="180" height="180"></img>
                            <h3>PHOTOSHOP</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-up-left"
                            className="animation-div"
                          >
                            <img src={git} width="180" height="180"></img>
                            <h3>GIT</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* fourth row */}
                      <Row>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-left" className="animation-div">
                            <img src={aws} width="180" height="180"></img>
                            <h3>AWS</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-right" className="animation-div">
                            <img src={gcp} width="180" height="180"></img>
                            <h3>GCP</h3>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img src={graphql} width="180" height="180"></img>
                            <h3>GRAPHQL</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={postgresql}
                              width="180"
                              height="180"
                            ></img>
                            <h3>POSTGRESQL</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img src={node} width="180" height="180"></img>
                            <h3>NODE JS</h3>
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
