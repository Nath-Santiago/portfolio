import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import { Title } from "../title";
import "./styles.scss";

const experiences = [
  {
    role: "Software Engineer / One Engineer",
    company: "Oracle NetSuite",
    period: "June 2024 - May 2026",
    summary:
      "Owned both development and quality responsibilities for core NetSuite product features and SuiteApps in a Kanban-driven Agile environment.",
    highlights: [
      "Designed, developed, and maintained core product features and SuiteApps.",
      "Created and executed manual and automated test cases for features and regressions.",
      "Investigated bugs, reproduced defects, and supported issue resolution.",
    ],
    skills: [
      "NetSuite Core and SuiteApp Development",
      "SuiteScript",
      "QA Engineering",
      "E2E Testing",
      "Playwright",
      "Jest",
      "Karma",
    ],
  },
  {
    role: "Middleware Developer",
    company: "98Labs, Inc.",
    period: "August 2021 - June 2024",
    summary:
      "Built and supported middleware solutions for banking and financial systems, focusing on reliable integrations and production-grade deployments.",
    highlights: [
      "Developed and maintained middleware for banking and financial systems.",
      "Integrated software platforms for dependable processing and data exchange.",
      "Configured, deployed, and supported middleware solutions across environments.",
    ],
    skills: [
      "Middleware Integration",
      "IBM App Connect Enterprise",
      "ESQL",
    ],
  },
  {
    role: "Fullstack Developer",
    company: "98Labs, Inc.",
    period: "January 2020 - July 2021",
    summary:
      "Delivered both backend and frontend features for a trading platform while handling cloud operations and automated communication workflows.",
    highlights: [
      "Developed backend services with NestJS for business logic and integrations.",
      "Built responsive frontend features with React for smoother user experiences.",
      "Managed cloud services, email templates, and automated delivery workflows.",
    ],
    skills: [
      "React",
      "Redux",
      "TypeScript",
      "NodeJs",
      "NestJS",
      "GCP",
      "GraphQL",
      "PostgreSQL",
    ],
  },
  {
    role: "Front-End Developer",
    company: "98Labs, Inc.",
    period: "July 2019 - January 2020",
    summary:
      "Started my career by translating business requirements into user-facing interfaces and supporting platform integrations and web maintenance.",
    highlights: [
      "Developed Parse Server API integrations for application features and data handling.",
      "Designed and implemented Angular interfaces from business requirements.",
      "Maintained and updated the company website.",
    ],
    skills: ["Javascript", "Typescript", "Angular", "ParseAPI"],
  },
];

export const Experience = () => {
  return (
    <div id="experience">
      <Element name="experience" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <div className="section-shell">
                    <Title title={"EXPERIENCE"}></Title>
                    <div className="section-body">
                      <Row>
                        <Col xs={12} lg={10}>
                          <div className="section-content" data-aos="fade-left">
                            <span className="section-title">
                              A timeline of how my career has grown
                            </span>
                            <p className="section-copy">
                              From front-end development to full-stack work,
                              middleware engineering, and product ownership,
                              each role added a new layer to how I build,
                              test, and ship reliable software.
                            </p>
                            <div className="timeline">
                              {experiences.map((experience, index) => (
                                <article
                                  className="timeline-item"
                                  key={`${experience.role}-${experience.period}`}
                                  data-aos={
                                    index % 2 === 0 ? "fade-right" : "fade-left"
                                  }
                                >
                                  <div className="timeline-rail">
                                    <span className="timeline-dot"></span>
                                  </div>
                                  <div className="timeline-period">
                                    <span>{experience.period}</span>
                                  </div>
                                  <div className="timeline-content">
                                    <span className="timeline-role">
                                      {experience.role}
                                    </span>
                                    <span className="timeline-company">
                                      {experience.company}
                                    </span>
                                    <p className="timeline-summary">
                                      {experience.summary}
                                    </p>
                                    <ul className="timeline-highlights">
                                      {experience.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                      ))}
                                    </ul>
                                    <p className="timeline-skills">
                                      <span className="timeline-skills-title">
                                        {experience.skills.join(" | ")}
                                      </span>
                                    </p>
                                  </div>
                                </article>
                              ))}
                            </div>
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
