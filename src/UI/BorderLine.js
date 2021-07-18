import React, { useState, useEffect } from "react";

import "./BorderLine.css";

const BorderLine = () => {
  const [width, setWidth] = useState(false);

  useEffect(() => {
    let windowSize = window.innerWidth;
    if (windowSize > 1024) {
      setWidth(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    let windowSize = window.innerWidth;
    if (windowSize > 1024) {
      setWidth(true);
    } else {
      setWidth(false);
    }
  });

  return (
    <span className={`border-line + ${width ? "active" : "hidden"}`}></span>
  );
};

export default BorderLine;
