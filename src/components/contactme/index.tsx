import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "../title";
import { Element } from "react-scroll";
import cvFile from "../../assets/files/Nathaniel_Santiago_CV.pdf";
import "./styles.scss";

type ContactLink = {
  label: string;
  href: string;
  download?: string;
  isPrimary?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    label: "Email Me",
    href: "mailto:nathanielsantiago19@gmail.com",
    // isPrimary: FALSE,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathaniel-santiago-2813b0188/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Nath-Santiago",
  },
  {
    label: "Download CV",
    href: cvFile,
    download: "Nathaniel_Santiago_CV.pdf",
  },
];

export const ContactMe = () => {
  return (
    <div id="contact-me">
      <Element name="contact-me" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <div className="section-shell">
                    <Title title={"CONTACT"}></Title>
                    <div className="section-body">
                      <Row>
                        <Col xs={12} lg={10}>
                          <div className="section-content" data-aos="fade-left">
                            <span className="contact-title">
                              Let's connect
                            </span>
                            <p className="contact-copy">
                              Whether you want to talk about a project,
                              collaborate, or simply say hello, you can reach me
                              through any of the options below.
                            </p>
                            <div className="contact-actions">
                              {contactLinks.map(
                                ({ label, href, download, isPrimary }) => (
                                  <a
                                    key={label}
                                    className={`contact-action${
                                      isPrimary ? " primary" : ""
                                    }`}
                                    href={href}
                                    download={download}
                                    target={download ? undefined : "_blank"}
                                    rel={
                                      download
                                        ? undefined
                                        : "noopener noreferrer"
                                    }
                                  >
                                    {label}
                                  </a>
                                )
                              )}
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
