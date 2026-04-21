import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import bulsuLogo from "../../assets/pictures/Bulsu.png";
import { Title } from "../title";
import "./styles.scss";

export const Education = () => {
  return (
    <div id="education">
      <Element name="education" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div className="section-shell">
                  <Title title={"EDUCATION"}></Title>
                  <div className="section-body">
                    <Row>
                      <Col xs={12} lg={10}>
                        <div className="section-content" data-aos="fade-left">
                          <span className="section-title">
                            My Alma Mater
                          </span>
                          <p className="section-copy">
                            The academe that helped shape the technical base
                            behind the product, engineering, and integration work I do today.
                          </p>
                          <article className="education-card">
                            <div className="education-logo-wrap">
                              <img
                                className="education-logo"
                                src={bulsuLogo}
                                alt="BulSU logo"
                              />
                            </div>
                            <div className="education-details">
                              <span className="education-school">
                                Bulacan State University
                              </span>
                              <span className="education-degree">
                                Bachelor of Science in Information Technology
                              </span>
                            </div>
                          </article>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Element>
    </div>
  );
};
