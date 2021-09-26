import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import EventsPage from "./Pages/EventsPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import DonatePage from "./Pages/DonatePage";
import ScrollToTop from "./Components/ScrollToTop";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/events">
        <EventsPage />
      </Route>
      <Route exact path="/services">
        <ServicesPage />
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/donate">
        <DonatePage />
      </Route>
    </React.Fragment>
  );
};

export default App;
