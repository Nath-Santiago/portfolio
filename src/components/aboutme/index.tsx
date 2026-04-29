import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../title";
import { Element } from "react-scroll";
import "./styles.scss";

export const AboutMe = () => {
  const today = new Date();
  const careerStartDate = new Date(2019, 6, 1);
  let experienceYears =
    today.getFullYear() - careerStartDate.getFullYear();

  if (
    today.getMonth() < careerStartDate.getMonth() ||
    (today.getMonth() === careerStartDate.getMonth() &&
      today.getDate() < careerStartDate.getDate())
  ) {
    experienceYears -= 1;
  }

  return (
    <div id="about-me">
      <Element name="about-me" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <div className="section-shell">
                    <Title title={"ABOUT"}></Title>
                    <div className="section-body">
                      <Row>
                        <Col xs={12} md={12} lg={8}>
                          <div data-aos="fade-left" className="animation-div">
                            <span className="introductory">
                              Hello, I'm Nathaniel Santiago. Welcome to my corner
                              of the web.
                            </span>
                            <br></br>
                            <span className="message">
                              I'm a software engineer with {experienceYears}+
                              years of professional experience building
                              reliable, user-focused solutions. This site is a
                              snapshot of the work I care about, the skills
                              I've developed, and the passion I bring to every
                              project I take on.
                              {/* I am an alumna of the esteemed Bulacan State
                              University where I completed Bachelor of Science
                              in Information Technology class of 2019.
                              Commencing my career journey with{" "}
                              <a href="https://www.98labs.com/">98Labs, Inc</a>{" "}
                              as a junior software engineer, I embarked upon a
                              determined ascent towards professional excellence,
                              ultimately achieving the position of mid software
                              engineer through my hard work, dedication, and
                              unwavering commitment to my craft. As a software
                              engineer, I specialized in the front-end
                              development aspect of the discipline, fueled by my
                              passion for designing and implementing engaging
                              UI/UX features that cater to the end-users'
                              preferences. I believe that the process of
                              designing and building software is a creative
                              endeavor akin to fine art, where I can express
                              myself and my artistic abilities to the fullest.
                              As a fledgling in the field of software
                              engineering, I see every day as an opportunity to
                              learn, grow and progress steadily towards mastery. */}
                              {/* </span>
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
                            newbie in the field for me is like{' '} */}
                            </span>
                            <br />
                            <br></br>
                            {/* <i>
                              <strong>
                                "Living, learning, and getting better every
                                day."
                              </strong>
                            </i> */}
                            {/* <span className="message">
                              <i>
                                "I can do all things through Christ who
                                strengthens me."
                                <br />~ Philippians 4:13
                              </i>
                            </span> */}
                          </div>
                        </Col>
                      </Row>
                    </div>
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
