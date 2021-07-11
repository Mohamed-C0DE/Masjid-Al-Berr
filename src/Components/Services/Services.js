import React from "react";
import { Link } from "react-router-dom";
import {
  FaPrayingHands,
  FaArrowRight,
  FaUserFriends,
  FaRunning,
  FaMicrophone,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <h3>Services</h3>
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <FaPrayingHands className="prayer-hands-icon" />
          </div>
          <h4 className="card-title">Prayers</h4>
          <p className="card-content">
            You will be able to pray and connect with Allah in a clean, quiet,
            and blissful atmosphere. Our team is available to ensure...
          </p>
          <Link to="/services" className="card-link">
            Read More <FaArrowRight className="right-arrow" />
          </Link>
        </div>
        <div className="card">
          <div className="card-image">
            <FaUserFriends className="counselling-icon" />
          </div>
          <h4 className="card-title">Counselling</h4>
          <p className="card-content">
            Our goal is to help you face all of life’s difficulties with a
            positive and righteous attitude. We provide counselling for
            Marital..​
          </p>
          <Link to="/services" className="card-link">
            Read More <FaArrowRight className="right-arrow" />
          </Link>
        </div>
        <div className="card">
          <div className="card-image">
            <FaRunning className="youth-icon" />
          </div>
          <h4 className="card-title">Youth Programs</h4>
          <p className="card-content">
            Our goals have always been to help young Muslims to develop their
            character and create a strong bond among themselves...
          </p>
          <Link to="/services" className="card-link">
            Read More <FaArrowRight className="right-arrow" />
          </Link>
        </div>
        <div className="card">
          <div className="card-image">
            <FaMicrophone className="lecture-icon" />
          </div>
          <h4 className="card-title">Lectures</h4>
          <p className="card-content">
            To help you get on the right path to become an ‘ideal Muslim’, we
            offer lectures and conferences by important speakers...
          </p>
          <Link to="/services" className="card-link">
            Read More <FaArrowRight className="right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
