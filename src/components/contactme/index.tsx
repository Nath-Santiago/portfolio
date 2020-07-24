import React from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import { Title } from '../title';
import { Element } from 'react-scroll';

export const ContactMe = () => {
  return (
    <div id="contact-me">
      <Element name="contact-me" className="element">
        <Container fluid>
          <div data-aos="fade-up">
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: '85%' }}>
                    <Title title={'CONTACT'}></Title>
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={8}>
                          <div className="animation-div">
                            <Form>
                              <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" />
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" />
                                <Form.Text className="text-muted">
                                  Don't worry I will not share your
                                  informations. Your secret is safe with me.
                                </Form.Text>
                              </Form.Group>
                              <Form.Group controlId="formBasicPassword">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={10} />
                              </Form.Group>

                              <Button variant="primary" type="submit">
                                Send Me A Message
                              </Button>
                            </Form>
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
