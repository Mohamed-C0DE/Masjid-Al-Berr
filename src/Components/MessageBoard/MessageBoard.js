import React from "react";
import Events from "./Events/Events";
import PrayerTimes from "./PrayerTimes/PrayerTimes";

import "./MessageBoard.css";

const MessageBoard = () => {
  return (
    <div className="message-board">
      <div className="message-board-container">
        <Events />
        <PrayerTimes />
      </div>
    </div>
  );
};

export default MessageBoard;
