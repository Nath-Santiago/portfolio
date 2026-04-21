import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import { Title } from "../title";
import "./styles.scss";

const coreStrengths = [
  {
    title: "Product Engineering",
    items: [
      "Front-end Development",
      "Full-stack Product Engineering",
      "Middleware Integration",
      "Oracle NetSuite Product Development",
    ],
  },
  {
    title: "Frontend & UI",
    items: ["React", "Redux", "Angular", "HTML", "CSS"],
  },
  {
    title: "Backend & Integration",
    items: [
      "Node.js",
      "GraphQL",
      "SQL",
      "ESQL",
      "IBM App Connect Enterprise",
      "NetSuite ERP",
      "AWS",
      "GCP"
    ],
  },
  {
    title: "Quality & Delivery",
    items: [
      "Unit Testing",
      "Playwright",
      "Jest",
      "Bug Investigation",
      "Manual and Automation Testing",
      "Agile / Kanban",
      "JIRA",
      "Confluence"
    ],
  },
];

export const CoreStrengths = () => {
  return (
    <div id="core-strengths">
      <Element name="core-strengths" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <div className="section-shell">
                    <Title title={"Skills"}></Title>
                    <div className="section-body">
                      <Row>
                        <Col xs={12} lg={10}>
                          <div className="section-content" data-aos="fade-left">
                            <span className="section-title">
                              Strengths I bring to the table
                            </span>
                            <p className="section-copy">
                              A focused view of the areas I work in most often,
                              drawn from my experience across product
                              engineering, integration work, and quality-driven
                              delivery.
                            </p>
                            <div className="strength-groups">
                              {coreStrengths.map(({ title, items }) => (
                                <div className="strength-group" key={title}>
                                  <span className="strength-title">{title}</span>
                                  <div className="strength-tags">
                                    {items.map((item) => (
                                      <span className="strength-tag" key={item}>
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                </div>
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
