import React from "react";
import "./ContactMe.css";
import GMAIL from "../../Assets/gmail.png";
import GITHUB from "../../Assets/github.png";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe = () => {
  return (
    <section id="Contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard iconUrl={GMAIL} text="vishalverma4942@gmail.com" />
          <ContactInfoCard
            iconUrl={GITHUB}
            text="https://github.com/vishal124942"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
