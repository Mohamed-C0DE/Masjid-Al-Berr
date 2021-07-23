import React, { useState } from "react";

import classes from "./Events.module.css";

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
    <div
      className={
        scrolled
          ? classes["scrolled-events-section"]
          : classes["events-section"]
      }
    >
      <div className={classes["events-wrapper"]}>
        <h2 className={classes.title}>EVENTS</h2>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes.image}>
              <img
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="event-snapshot"
              />
            </div>
            <div className={classes.content}>
              <p className={classes["content-title"]}>Event Name</p>
              <p className={classes["content-date"]}>Sep 1st 2021</p>
              <p className={classes["content-info"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate leo enim, non pulvinar ipsum consectetur sit amet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget varius mi. Nam porttitor sodales ligula, sit amet mattis
                orci venenatis ac.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="event-snapshot"
              />
            </div>
            <div className={classes.content}>
              <p className={classes["content-title"]}>Event Name</p>
              <p className={classes["content-date"]}>Sep 10th 2021</p>
              <p className={classes["content-info"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate leo enim, non pulvinar ipsum consectetur sit amet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget varius mi. Nam porttitor sodales ligula, sit amet mattis
                orci venenatis ac.
              </p>
            </div>
          </div>
          <div className={classes.card}>
            <div className={classes.image}>
              <img
                src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="event-snapshot"
              />
            </div>
            <div className={classes.content}>
              <p className={classes["content-title"]}>Event Name</p>
              <p className={classes["content-date"]}>Oct 15th 2021</p>
              <p className={classes["content-info"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vulputate leo enim, non pulvinar ipsum consectetur sit amet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget varius mi. Nam porttitor sodales ligula, sit amet mattis
                orci venenatis ac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
