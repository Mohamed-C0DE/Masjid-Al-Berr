import React from "react";
import { Link } from "react-router-dom";
import {
  FaPrayingHands,
  FaArrowRight,
  FaUserFriends,
  FaRunning,
  FaMicrophone,
} from "react-icons/fa";

import classes from "./ServicesSection.module.css";

const ServicesSection = () => {
  return (
    <div className={classes.services}>
      <h3>Services</h3>
      <div className={classes.cards}>
        <div className={classes.card}>
          <div className={classes["card-image"]}>
            <FaPrayingHands className={classes["prayer-hands-icon"]} />
          </div>
          <h4 className={classes["card-title"]}>Prayers</h4>
          <p className={classes["card-content"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisi
            in sapien placerat dapibus...
          </p>
          <Link to="/services" className={classes["card-link"]}>
            Read More <FaArrowRight className={classes["right-arrow"]} />
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes["card-image"]}>
            <FaUserFriends className={classes["counselling-icon"]} />
          </div>
          <h4 className={classes["card-title"]}>Counselling</h4>
          <p className={classes["card-content"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisi
            in sapien placerat dapibus...
          </p>
          <Link to="/services" className={classes["card-link"]}>
            Read More <FaArrowRight className={classes["right-arrow"]} />
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes["card-image"]}>
            <FaRunning className={classes["youth-icon"]} />
          </div>
          <h4 className={classes["card-title"]}>Youth Programs</h4>
          <p className={classes["card-content"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisi
            in sapien placerat dapibus...
          </p>
          <Link to="/services" className={classes["card-link"]}>
            Read More <FaArrowRight className={classes["right-arrow"]} />
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes["card-image"]}>
            <FaMicrophone className={classes["lecture-icon"]} />
          </div>
          <h4 className={classes["card-title"]}>Lectures</h4>
          <p className={classes["card-content"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a nisi
            in sapien placerat dapibus...
          </p>
          <Link to="/services" className={classes["card-link"]}>
            Read More <FaArrowRight className={classes["right-arrow"]} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
