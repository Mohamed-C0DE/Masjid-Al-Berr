import React, { useState } from "react";

import "./About.css";

const AboutSection = () => {
  const [scrolled, setScrolled] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className={scrolled ? "scrolled-about-section" : "about-section"}>
      <div className="about-wrapper">
        <h1>ABOUT SECTION</h1>
      </div>
    </div>
  );
};

export default AboutSection;
