import React, { useState } from "react";
import {
  FaPrayingHands,
  FaUserFriends,
  FaRunning,
  FaMicrophone,
} from "react-icons/fa";
import classes from "./Services.module.css";

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
      className={
        scrolled
          ? classes["scrolled-services-section"]
          : classes["services-section"]
      }
    >
      <div className={classes["services-wrapper"]}>
        <h2 className={classes.title}>SERVICES</h2>
        <div className={classes.cards}>
          <div className={classes.card}>
            <div className={classes["card-image"]}>
              <FaPrayingHands className={classes.icon} />
            </div>
            <h4 className={classes["card-title"]}>Prayers</h4>
            <p className={classes["card-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae nunc aliquam, mollis lacus ac, hendrerit mi. Donec venenatis
              eget neque vel euismod. Vestibulum eu ornare diam. Suspendisse
              feugiat et purus ut fringilla. Sed at suscipit lacus, vitae
              vulputate nunc. Integer quis mauris at urna rutrum hendrerit a
              quis nisl. Cras in velit posuere, semper velit ac, volutpat leo.
              Ut quis erat non eros imperdiet suscipit eu sit amet mi. Donec
              felis lectus, commodo at ullamcorper sit amet, blandit euismod
              felis.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes["card-image"]}>
              <FaUserFriends className={classes.icon} />
            </div>
            <h4 className={classes["card-title"]}>Counselling</h4>
            <p className={classes["card-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae nunc aliquam, mollis lacus ac, hendrerit mi. Donec venenatis
              eget neque vel euismod. Vestibulum eu ornare diam. Suspendisse
              feugiat et purus ut fringilla. Sed at suscipit lacus, vitae
              vulputate nunc. Integer quis mauris at urna rutrum hendrerit a
              quis nisl. Cras in velit posuere, semper velit ac, volutpat leo.
              Ut quis erat non eros imperdiet suscipit eu sit amet mi. Donec
              felis lectus, commodo at ullamcorper sit amet, blandit euismod
              felis.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes["card-image"]}>
              <FaRunning className={classes.icon} />
            </div>
            <h4 className={classes["card-title"]}>Youth Programs</h4>
            <p className={classes["card-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae nunc aliquam, mollis lacus ac, hendrerit mi. Donec venenatis
              eget neque vel euismod. Vestibulum eu ornare diam. Suspendisse
              feugiat et purus ut fringilla. Sed at suscipit lacus, vitae
              vulputate nunc. Integer quis mauris at urna rutrum hendrerit a
              quis nisl. Cras in velit posuere, semper velit ac, volutpat leo.
              Ut quis erat non eros imperdiet suscipit eu sit amet mi. Donec
              felis lectus, commodo at ullamcorper sit amet, blandit euismod
              felis.
            </p>
          </div>
          <div className={classes.card}>
            <div className={classes["card-image"]}>
              <FaMicrophone className={classes.icon} />
            </div>
            <h4 className={classes["card-title"]}>Lectures</h4>
            <p className={classes["card-content"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              vitae nunc aliquam, mollis lacus ac, hendrerit mi. Donec venenatis
              eget neque vel euismod. Vestibulum eu ornare diam. Suspendisse
              feugiat et purus ut fringilla. Sed at suscipit lacus, vitae
              vulputate nunc. Integer quis mauris at urna rutrum hendrerit a
              quis nisl. Cras in velit posuere, semper velit ac, volutpat leo.
              Ut quis erat non eros imperdiet suscipit eu sit amet mi. Donec
              felis lectus, commodo at ullamcorper sit amet, blandit euismod
              felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
