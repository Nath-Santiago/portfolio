import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import html5 from "../../assets/icons/html5.svg";
import css5 from "../../assets/icons/css3.svg";
import js from "../../assets/icons/javascript.svg";
import angular from "../../assets/icons/angular.svg";
import react from "../../assets/icons/react.svg";
import graphql from "../../assets/icons/graphql.svg";
import redux from "../../assets/icons/redux.svg";
import node from "../../assets/icons/nodejs-icon.svg";
import git from "../../assets/icons/git.svg";
import gcp from "../../assets/icons/gcp.svg";
import aws from "../../assets/icons/aws.svg";
import photoshop from "../../assets/icons/photoshop.svg";
import postgresql from "../../assets/icons/postgresql.svg";
import ibmace from "../../assets/icons/ibmace.svg";
import go from "../../assets/icons/go.svg";
import { Element } from "react-scroll";
import "./styles.scss";

import { Title } from "../title";

export const Skills = () => {
  return (
    <div id="skills">
      <Element name="skills" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: "85%" }}>
                    <Title title={"SKILLS"}></Title>
                    <Card.Body>
                      {/* first row */}
                      <Row>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-down-right"
                            className="animation-div"
                          >
                            <img
                              src={html5}
                              alt="HTML"
                              width="200"
                              height="200"
                            ></img>
                            <h3>HTML</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-down" className="animation-div">
                            <img
                              src={css5}
                              alt="CSS"
                              width="200"
                              height="200"
                            ></img>
                            <h3>CSS</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-down-left"
                            className="animation-div"
                          >
                            <img
                              src={js}
                              alt="JS"
                              width="200"
                              height="200"
                            ></img>
                            <h3>JAVASCRIPT</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* second row */}
                      <Row>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-right" className="animation-div">
                            <img
                              src={react}
                              alt="React"
                              width="180"
                              height="180"
                            ></img>
                            <h3>REACT</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-left" className="animation-div">
                            <img
                              src={angular}
                              alt="Angular"
                              width="180"
                              height="180"
                            ></img>
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
                            <img
                              src={redux}
                              alt="Redux"
                              width="180"
                              height="180"
                            ></img>
                            <h3>REDUX</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={photoshop}
                              alt="Photoshop"
                              width="180"
                              height="180"
                            ></img>
                            <h3>PHOTOSHOP</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div
                            data-aos="fade-up-left"
                            className="animation-div"
                          >
                            <img
                              src={git}
                              alt="Git"
                              width="180"
                              height="180"
                            ></img>
                            <h3>GIT</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* fourth row */}
                      <Row>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-left" className="animation-div">
                            <img
                              src={aws}
                              alt="AWS"
                              width="180"
                              height="180"
                            ></img>
                            <h3>AWS</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-right" className="animation-div">
                            <img
                              src={gcp}
                              alt="GCP"
                              width="180"
                              height="180"
                            ></img>
                            <h3>GCP</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* fifth row */}
                      <Row>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={graphql}
                              alt="GraphQL"
                              width="180"
                              height="180"
                            ></img>
                            <h3>GRAPHQL</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={postgresql}
                              width="180"
                              height="180"
                              alt="PostgreSQL"
                            ></img>
                            <h3>POSTGRESQL</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={4}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={node}
                              alt="Nodejs"
                              width="180"
                              height="180"
                            ></img>
                            <h3>NODE JS</h3>
                          </div>
                        </Col>
                      </Row>
                      {/* sixth row */}
                      <Row>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={ibmace}
                              alt="IBMACE"
                              width="180"
                              height="180"
                            ></img>
                            <h3>IBM ACE</h3>
                          </div>
                        </Col>
                        <Col md={12} lg={6}>
                          <div data-aos="fade-up" className="animation-div">
                            <img
                              src={go}
                              alt="Golang"
                              width="180"
                              height="180"
                            ></img>
                            <h3>GOLANG</h3>
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
