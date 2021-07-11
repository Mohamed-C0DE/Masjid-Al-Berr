import React from "react";
import Button from "../../UI/Button";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-wrapper">
        <h2 className="form-title">CONTACT US</h2>
        <p className="form-email">Email: info@email.com</p>
        <p className="form-content">
          If you have any questions or inquiries fill in the form below. We will
          get back to you as soon as we can.
        </p>
        <form className="form">
          <label className="form-label">Name (Required)</label>
          <input type="text" className="form-input"></input>
          <label className="form-label">Email (Required)</label>
          <input type="email" className="form-input"></input>
          <label className="form-label">Subject</label>
          <input type="text" className="form-input"></input>
          <label className="form-label form-message">Message (Required)</label>
          <input type="text" className="form-input"></input>
        </form>
        <button type="submit" className="form-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
