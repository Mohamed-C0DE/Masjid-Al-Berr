import React, { useState } from "react";

import "./Services.css";

const Services = () => {
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
    <div
      className={scrolled ? "scrolled-services-section" : "services-section"}
    >
      <div className="services-wrapper">
        <h1>SERVICES SECTION</h1>
      </div>
    </div>
  );
};

export default Services;
