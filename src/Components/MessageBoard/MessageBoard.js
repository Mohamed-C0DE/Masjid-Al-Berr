import React, { useState } from "react";
import Events from "./Events/Events";
import PrayerTimes from "./PrayerTimes/PrayerTimes";

import "./MessageBoard.css";

const MessageBoard = () => {
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
    <div className={scrolled ? "scrolled-message-board" : "message-board"}>
      <div className="message-board-container">
        <Events />
        <PrayerTimes />
      </div>
    </div>
  );
};

export default MessageBoard;
