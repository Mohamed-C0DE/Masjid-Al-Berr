import React from "react";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Donate from "./Pages/Donate";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Route exact path={["/", "home"]}>
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/services">
        <Services />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/donate">
        <Donate />
      </Route>
    </React.Fragment>
  );
};

export default App;
