import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <h3 className="social-title">Stay Up-to-Date</h3>
      <div className="card-wrapper">
        <Link to="/" className="social-card">
          <FaFacebook className={`social-icons facebook-icon`} />
          <p className="platform-name">Facebook</p>
        </Link>
        <Link to="/" className="social-card">
          <FaYoutube className={`social-icons youtube-icon`} />
          <p className="platform-name">YouTube</p>
        </Link>
        <Link to="/" className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Brothers WhatsApp</p>
        </Link>
        <Link to="/" className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Sisters WhatsApp</p>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
