import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import "./Photos.css";

const photoArr = [
  "https://static.wixstatic.com/media/486ab4_f862658b256f48629b3a5e0baf3c4b5a~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_f862658b256f48629b3a5e0baf3c4b5a~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_029c02f8855340b2b567783c7b5c92d5~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_029c02f8855340b2b567783c7b5c92d5~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_4c595e69e5034e089581876de316ba12~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_4c595e69e5034e089581876de316ba12~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_b3f4b499a370400fa6354142f8763838~mv2.png/v1/fill/w_1225,h_628,al_c,q_90,usm_0.66_1.00_0.01/486ab4_b3f4b499a370400fa6354142f8763838~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_e746188820d44447beccf55a872d173b~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_e746188820d44447beccf55a872d173b~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_5d1ad872e2ee4aec942f386e3e2fb709~mv2.jpeg/v1/fill/w_1200,h_615,al_c,q_85/486ab4_5d1ad872e2ee4aec942f386e3e2fb709~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_190b05f7f3eb42649fa23c1ce22f6e74~mv2.jpeg/v1/fill/w_1200,h_615,al_c,q_85/486ab4_190b05f7f3eb42649fa23c1ce22f6e74~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_ad2f4e1af8b345cd9f9752c56fc1d062~mv2.png/v1/fill/w_1225,h_628,al_c,q_90,usm_0.66_1.00_0.01/486ab4_ad2f4e1af8b345cd9f9752c56fc1d062~mv2.webp",
];

const Photos = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const onClickHandler = (event) => {
    if (showModal === false) {
      setShowModal(true);
      setSelectedImage(event.target.src);
    } else {
      setShowModal(false);
      setSelectedImage("");
    }
  };

  if (showModal === true) {
    return (
      <div className="overlay" onClick={onClickHandler}>
        <GrClose className="photo-close-btn" onClick={onClickHandler} />
        <div className="image-modal">
          <img src={selectedImage} alt="Interior and Exterior of Mosque" />
        </div>
      </div>
    );
  } else {
    return (
      <section className="photos">
        <h3>Photos</h3>
        <div className="image-container">
          <div className="images image-1" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[0]} alt="masjid-photos" />
          </div>
          <div className="images image-2" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[1]} alt="masjid-photos" />
          </div>
          <div className="images image-3" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[2]} alt="masjid-photos" />
          </div>
          <div className="images image-4" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[3]} alt="masjid-photos" />
          </div>
          <div className="images image-5" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[4]} alt="masjid-photos" />
          </div>
          <div className="images image-6" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[5]} alt="masjid-photos" />
          </div>
          <div className="images image-7" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[6]} alt="masjid-photos" />
          </div>
          <div className="images image-8" onClick={onClickHandler}>
            <img loading="lazy" src={photoArr[7]} alt="masjid-photos" />
          </div>
        </div>
      </section>
    );
  }
};

export default Photos;
