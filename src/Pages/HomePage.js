import React from "react";
import Header from "../Components/Header/Header";
import SocialMedia from "../Components/SocialMedia/SocialMedia";
import Footer from "../Components/Footer/Footer";
import ServicesSection from "../Components/ServicesSection/ServicesSection";
import DonateSection from "../Components/DonateSection/DonateSection";
import Photos from "../Components/Photos/Photos";
import MessageBoard from "../Components/MessageBoard/MessageBoard";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <MessageBoard />
      <SocialMedia />
      <ServicesSection />
      <DonateSection />
      <Photos />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
