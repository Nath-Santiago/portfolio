import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Title } from "../title";
import gtmChart from "../../assets/pictures/gtm-chart-3.png";
import gtmPlatform from "../../assets/pictures/gtm-trading-platform.png";
import undp from "../../assets/pictures/undp.png";
import { Element } from "react-scroll";
import "./styles.scss";

export const Portfolios = () => {
  return (
    <div id="portfolios">
      <Element name="portfolios" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: "85%" }}>
                    <Title title={"PORTFOLIOS"}></Title>
                    <Card.Body>
                      <Row>
                        <Col lg={12} xl={12}>
                          <div data-aos="flip-left" className="animation-div">
                            <img
                              src={gtmChart}
                              alt="gtm"
                              width="90%"
                              height="80%"
                            ></img>
                            {/* <a href="https://www.greentigermarkets.com/market-data.html">
                              <div className="middle">
                                <div className="text">Click Here</div>
                              </div>
                            </a> */}
                            <h3>Green Tiger Markets Trading Chart</h3>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} xl={12}>
                          <div data-aos="flip-left" className="animation-div">
                            <img
                              src={gtmPlatform}
                              alt="gtm"
                              width="90%"
                              height="80%"
                            ></img>
                            <h3>Green Tiger Markets Trading Platform</h3>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} xl={12}>
                          <div data-aos="flip-right" className="animation-div">
                            <a href="https://play.google.com/store/apps/details?id=org.devlive.app">
                              {/* <div className="middle"> */}
                              <img
                                src={undp}
                                alt="undp"
                                width="90%"
                                height="80%"
                              ></img>

                              <div className="text">Click Me</div>
                              {/* </div> */}
                            </a>
                            <h3>DevLIVE</h3>
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
