import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { Title } from "../title";
import { Element } from "react-scroll";
import { Formik } from "formik";
import * as Yup from "yup";
import sendgrid from "@sendgrid/mail";
import "./styles.scss";
import { sendgridApiKey, emailTemplateId } from "../../assets/keys/sendgrid";

export interface FormFields {
  name: string;
  email: string;
  message: string;
}
export const ContactMe = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    email: Yup.string()
      .email("*Must be a valid email address")
      .max(100, "*Email must be less than 100 characters")
      .required("*Email is required"),
    message: Yup.string()
      .min(10, "*Message must have at least 10 characters")
      .max(175, "*Message can't be longer than 175 characters")
      .required("*Message is required"),
  });

  const sendMail = async (formValues: FormFields) => {
    try {
      const jsonData = {
        senderEmail: formValues.email,
        senderName: formValues.name,
        message: formValues.message,
      };
      sendgrid.setApiKey(sendgridApiKey);
      const msg = {
        to: "nathanielsantiago19@gmail.com",
        from: "portfoliomailer@nath.com",
        dynamic_template_data: jsonData,
        templateId: emailTemplateId,
      };
      const response = await sendgrid.send(msg);
      console.log(response, "REPSONSE");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //  {
  //     "status": "success",
  //     "message": "SMTP User Created",
  //     "smtp_password": "VdAiqilIFw"
  //  }

  // https://us1-mta1.sendclean.net/
  // const sendMailv2 = async (formValues: FormFields) => {
  //   const sendclean_client = new SendClean({
  //     token: "gCt3TxNc84wGTj73IuHNMPT1",
  //     owner_id: "28779705",
  //   });
  //   sendclean_client.getUserInfo().then((userinfo) => {
  //     console.log(userinfo);
  //   });
  // };

  return (
    <div id="contact-me">
      <Element name="contact-me" className="element">
        <div data-aos="fade-up">
          <Container fluid>
            <Row>
              <Col>
                <div data-aos="fade-up">
                  <Card style={{ width: "85%" }}>
                    <Title title={"CONTACT"}></Title>
                    <Card.Body>
                      <Row>
                        <Col xs={12} md={8}>
                          <div className="animation-div">
                            <Formik
                              initialValues={{
                                name: "",
                                email: "",
                                message: "",
                              }}
                              validationSchema={validationSchema}
                              onSubmit={async (
                                values,
                                { setSubmitting, resetForm }
                              ) => {
                                // When button submits form and form is in the process of submitting, submit button is disabled
                                setSubmitting(true);
                                await sendMail(values);
                                // await sendMailv2(values);
                                resetForm();
                                setSubmitting(false);
                              }}
                            >
                              {/* Callback function containing Formik state and helpers that handle common form actions */}
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit}>
                                  <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                      type="text"
                                      name="email"
                                      placeholder="Email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                                    />
                                    {touched.email && errors.email ? (
                                      <div className="error-message">
                                        {errors.email}
                                      </div>
                                    ) : null}
                                  </Form.Group>

                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                      type="text"
                                      name="name"
                                      placeholder="Full Name"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.name}
                                    />
                                    {touched.name && errors.name ? (
                                      <div className="error-message">
                                        {errors.name}
                                      </div>
                                    ) : null}
                                    <Form.Text className="text-muted">
                                      Don't worry I will not share your
                                      informations. Your secret is safe with me.
                                    </Form.Text>
                                  </Form.Group>
                                  <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                      as="textarea"
                                      rows={10}
                                      type="text"
                                      name="message"
                                      placeholder="Please type your message here"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.message}
                                    />
                                    {touched.message && errors.message ? (
                                      <div className="error-message">
                                        {errors.message}
                                      </div>
                                    ) : null}
                                  </Form.Group>

                                  <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={isSubmitting}
                                  >
                                    Send Me A Message
                                  </Button>
                                </form>
                              )}
                            </Formik>
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
