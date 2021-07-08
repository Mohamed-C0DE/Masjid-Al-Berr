import React from "react";
import Header from "../Components/Header/Header";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import Footer from "../Components/Footer/Footer";
import Services from "../Components/Services/Services";
import Donate from "../Components/Donate/Donate";
import Photos from "../Components/Photos/Photos";
import MessageBoard from "../Components/MessageBoard/MessageBoard";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <MessageBoard />
      <SocialMedia />
      <Services />
      <Donate />
      <Photos />
      <Footer />
    </div>
  );
};

export default Home;
