import React, { useState } from "react";

import "./Events.css";

const Events = () => {
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
    <div className={scrolled ? "scrolled-events-section" : "events-section"}>
      <div className="events-wrapper">
        <h1>EVENTS SECTION</h1>
      </div>
    </div>
  );
};

export default Events;
