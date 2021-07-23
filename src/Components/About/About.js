import React, { useState } from "react";
import Imams from "./Imams/Imams";
import MissionStatement from "./MissionStatement/MissionStatement";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState(false);

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const onClickHandler = () => {
    if (!activePage) {
      setActivePage(true);
    } else {
      setActivePage(false);
    }
  };

  return (
    <div
      className={
        scrolled ? classes["scrolled-about-section"] : classes["about-section"]
      }
    >
      <div className={classes["about-wrapper"]}>
        <div className={classes["about-menu"]}>
          <Link
            to="/about"
            className={`${classes.links} + ${activePage ? "" : classes.active}`}
            onClick={onClickHandler}
          >
            Mission Page
          </Link>
          <span className={classes.border}></span>
          <Link
            to="/about"
            className={`${classes.links} + ${activePage ? classes.active : ""}`}
            onClick={onClickHandler}
          >
            Imams Page
          </Link>
        </div>
        {activePage ? <Imams /> : <MissionStatement />}
      </div>
    </div>
  );
};

export default AboutSection;
