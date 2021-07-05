import React from "react";
import Header from "./Components/Header";
import Events from "./Components/Events";
import SocialMedia from "./Components/SocialMedia";
import Footer from "./Components/Footer";
import PrayerTimes from "./Components/PrayerTimes";
import Services from "./Components/Services";
import Donate from "./Components/Donate";
import Photos from "./Components/Photos";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Events />
      <PrayerTimes />
      <SocialMedia />
      <Services />
      <Donate />
      <Photos />
      <Footer />
    </React.Fragment>
  );
};

export default App;
