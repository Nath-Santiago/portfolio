import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../title";
import { Element } from "react-scroll";
import "./styles.scss";

const projects = [
  {
    title: "SuiteApprovals",
    category: "SuiteApp",
    details:
      "An Oracle NetSuite SuiteApp that manages approval workflows for records like purchase orders, vendor bills, expense reports, sales orders, requisitions, and journal entries. It lets teams define approval rules, routing, approval limits, delegation, and email-based approvals so only authorized people can approve or reject transactions.",
  },
  {
    title: "Bill Capture and Transaction Email Capture",
    category: "Core Feature and SuiteApp",
    details:
      "Bill Capture is a core NetSuite feature that lets teams upload or email vendor bill files and automatically create vendor bills, reducing manual data entry and errors. Transaction Email Capture is the companion SuiteApp that enables employees and vendors to send those bill files into NetSuite by email, feeding Bill Capture's automated bill-creation workflow.",
  },
  {
    title: "Supply Chain Management",
    category: "Managed SuiteApp",
    details:
      "A paid managed SuiteApp that consolidates real-time supply chain data and adds operational tools inside NetSuite. It includes capabilities such as printable warehouse and manufacturing reports and forms like the Inventory Count Sheet, Daily Shipment Detail Report, Manufacturing Dispatch List, and item substitution on sales orders.",
  },
  {
    title: "Warranty and Repairs Management",
    category: "Managed SuiteApp",
    details:
      "A NetSuite SuiteApp for registering warranties and managing warranty claims. It validates claims against warranty terms and supports downstream actions like refunds, repairs, replacements, return authorizations, credit memos, and sales orders, helping teams process after-sales service more efficiently.",
  },
  {
    title: "Green Tiger Markets Trading Platform",
    category: "Commodities Trading",
    details:
      "A marketplace operator focused on underserved commodity and energy markets, helping participants manage price risk through forward trading. Its platform is designed to improve market transparency, support more stable pricing, and foster growth in developing markets.",
  },
  {
    title: "Development LIVE (DevLIVE)",
    category: "Android App & Web Portal",
    details:
      "A digital citizen engagement platform that helps governments and communities monitor public projects more transparently and in real time. It supports faster issue reporting, stronger accountability, and more responsive project implementation.",
  },
];

export const Projects = () => {
  return (
    <div id="projects">
      <Element name="projects" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <div className="section-shell">
                    <Title title={"PROJECTS"}></Title>
                    <div className="section-body">
                      <Row>
                        <Col xs={12} lg={10}>
                          <div className="section-content" data-aos="fade-left">
                            <span className="section-title">
                              Projects I have worked on
                            </span>
                            <p className="section-copy">
                              A few products and solutions that reflect the kind
                              of systems I enjoy building: practical,
                              high-impact, and designed to support real business
                              workflows.
                            </p>
                            <div className="project-grid">
                              {projects.map((project, index) => (
                                <article
                                  className="project-card"
                                  key={project.title}
                                  data-aos={
                                    index % 2 === 0
                                      ? "fade-right"
                                      : "fade-left"
                                  }
                                >
                                  {/* <span className="project-index">
                                    {String(index + 1).padStart(2, "0")}
                                  </span> */}
                                  <h3 className="project-title">
                                    {project.title}
                                  </h3>
                                  <span className="project-category">
                                    {project.category}
                                  </span>
                                  <p className="project-details">
                                    {project.details}
                                  </p>
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
