import Layout from "../../Components/Layout/Layout";
import SupportTeam from "../../Components/SupportTeam/SupportTeam";
import Form from "react-bootstrap/Form";
import "./Support.css";

const Support = (props) => {
  return (
    <Layout user={props.user}>
      <div className="support-container">
        <div className="support-left">
          <header>SUPPORT</header>
          <div className="support-content">
            Due to COVID-19, Please allow our customer service team to reach out
            up to two business days.
          </div>
          <div className="support-team">
            <p>To reach out our engineering team directly:</p>
            <SupportTeam />
          </div>
        </div>
        <form className="support-right">
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-name"
              type="text"
              placeholder="First / Last name"
            />
            <label htmlFor="contact-name">Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-email"
              type="email"
              placeholder="name@example.com"
            />
            <label htmlFor="contact-email">E-mail</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="contact-message"
              type="message"
              placeholder="message"
              as="textarea"
            />
            <label htmlFor="contact-message">Message</label>
          </Form.Floating>
        </form>
      </div>
    </Layout>
  );
};

export default Support;
