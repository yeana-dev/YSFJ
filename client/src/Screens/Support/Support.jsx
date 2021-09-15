import Layout from "../../Components/Layout/Layout";
import SupportTeam from "../../Components/SupportTeam/SupportTeam";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import emailjs from "emailjs-com";
import { useState } from "react";
import "./Support.css";

const Support = (props) => {
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_iiwc60s",
        "template_2tmy79s",
        e.target,
        "user_YOH18ApgTgggDNs7eGZD9"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShow(true);
  };
  return (
    <Layout user={props.user}>
      <div className="support-container">
        <div className="support-left">
          <header>SUPPORT</header>
          <div className="support-content">
            Our goal is to ensure everyone is looking sleek with their new
            pairs! If you are not satisfied for any reason, please let us know!
            We can make it right. Please fill out this form, and we will get
            back to you within two business days!
          </div>
          <div className="support-team">
            <p>To reach out our engineering team directly:</p>
            <SupportTeam />
          </div>
        </div>
        <form className="support-right" onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-name"
              type="text"
              placeholder="First / Last name"
              name="from_name"
              required
            />
            <label htmlFor="contact-name">Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-email"
              type="email"
              name="reply_to"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="contact-email">E-mail</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-orderNumber"
              type="number"
              name="order_number"
              placeholder="Order Number (optional)"
            />
            <label htmlFor="contact-message">Order Number (optional)</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-message"
              type="text"
              placeholder="message"
              as="textarea"
              name="message"
              required
            />
            <label htmlFor="contact-message">Message</label>
          </Form.Floating>
          <div className="form-bottom">
            <input type="submit" className="contact-submit" />
            <Alert variant="success" id="contact-alert" show={show}>
              Message Sent!
            </Alert>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Support;
