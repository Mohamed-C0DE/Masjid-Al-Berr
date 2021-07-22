import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <h3 className="social-title">Stay Up-to-Date</h3>
      <div className="card-wrapper">
        <a className="social-card">
          <FaFacebook className={`social-icons facebook-icon`} />
          <p className="platform-name">Facebook</p>
        </a>
        <a className="social-card">
          <FaYoutube className={`social-icons youtube-icon`} />
          <p className="platform-name">YouTube</p>
        </a>
        <a className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Brothers WhatsApp</p>
        </a>
        <a className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Sisters WhatsApp</p>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
