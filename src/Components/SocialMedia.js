import React from "react";
import { FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <h3 className="title">Stay Up-to-Date</h3>
      <div className="social-cards">
        <FaFacebook className={`social-icons facebook-icon`} />
        <p>Facebook</p>
      </div>
      <div className="social-cards">
        <FaYoutube className={`social-icons youtube-icon`} />
        <p>YouTube</p>
      </div>
      <div className="social-cards">
        <FaWhatsapp className={`social-icons whatsapp-icon`} />
        <p>Brothers WhatsApp</p>
      </div>
      <div className="social-cards">
        <FaWhatsapp className={`social-icons whatsapp-icon`} />
        <p>Sisters WhatsApp</p>
      </div>
    </div>
  );
};

export default SocialMedia;
