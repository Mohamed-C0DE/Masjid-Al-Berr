import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <h3 className="social-title">Stay Up-to-Date</h3>
      <div className="card-wrapper">
        <div className="social-card">
          <FaFacebook className={`social-icons facebook-icon`} />
          <p className="platform-name">Facebook</p>
        </div>
        <div className="social-card">
          <FaYoutube className={`social-icons youtube-icon`} />
          <p className="platform-name">YouTube</p>
        </div>
        <div className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Brothers WhatsApp</p>
        </div>
        <div className="social-card">
          <FaWhatsapp className={`social-icons whatsapp-icon`} />
          <p className="platform-name">Sisters WhatsApp</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
