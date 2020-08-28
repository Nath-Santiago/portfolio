import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Title } from '../title';
import { Element } from 'react-scroll';
import './styles.scss';

export const AboutMe = () => {
  return (
    <div id="about-me">
      <Element name="about-me" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: '85%' }}>
                    <Title title={'ABOUT'}></Title>
                    <Card.Body>
                      <Row>
                        <Col xs={10}>
                          <div data-aos="fade-left" className="animation-div">
                            <span className="introductory">
                              Hi, I'm Nathaniel Santiago. Nice to meet you.
                          </span>
                            <br></br>
                            <span className="message">
                              I'm a graduate of Bachelor of Science in Information
                              Technology from Bulacan State University Batch 2019.
                            I got my first job as a junior software engineer at{' '}
                              <a href="https://www.98labs.com/">98Labs, Inc</a>.
                              As a software engineer I focused more on being a
                              front-end developer because I love to implement and
                              design the UI/UX for the end users. For me being
                              able to design is a form of art where I can express
                              myself. Being a junior software engineer and a
                            newbie in the field for me is like{' '}
                              <i>
                                <strong>
                                  "Living, learning, & leveling up one day at a
                                  time."
                              </strong>
                              </i>
                            </span>
                            <br />
                            <br></br>
                            <span className="message">
                              <i>
                                "I can do all things through Christ who
                                strengthens me."
                              <br />~ Philippians 4:13
                            </i>
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Element>
    </div>
  );
};
