import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/home">
        <Redirect to="/" />
      </Route>
    </React.Fragment>
  );
};

export default App;
