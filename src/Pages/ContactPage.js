import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ContactForm from "../Components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
};

export default ContactPage;
