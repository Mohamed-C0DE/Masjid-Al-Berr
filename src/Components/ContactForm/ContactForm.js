import React, { useState } from "react";
import Form from "./Form/Form";
import firebaseDb from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./ContactForm.css";

const ContactForm = () => {
  const [submittedMessage, setSubmittedMessage] = useState();
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const submittedFormHandler = (data) => {
    // Get data from form and submit to database
    addDoc(collection(firebaseDb, "contactForm"), data);
  };

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className={scrolled ? "scrolled-contact-form" : "contact-form"}>
      <div className="contact-form-wrapper">
        <h2 className="form-title">CONTACT US</h2>
        <p className="contact-email">
          <span className="color-change">Email:</span> info@email.com
        </p>
        <p className="contact-address">
          <span className="color-change">Address:</span> 123 Street Ave,
          Windsor, On
        </p>
        <p className="form-content">
          If you have any questions or inquiries fill in the form below. We will
          get back to you as soon as we can.
        </p>
        {submittedMessage ? (
          <p
            className={`success-message + ${
              toggle ? "toggle-show" : "toggle-hidden"
            }`}
          >
            Form sent!
          </p>
        ) : (
          <p
            className={`error-message + ${
              toggle ? "toggle-show" : "toggle-hidden"
            }`}
          >
            Please fill in the required fields correctly!
          </p>
        )}
        <Form onSubmittedForm={submittedFormHandler} />
      </div>
    </div>
  );
};

export default ContactForm;
