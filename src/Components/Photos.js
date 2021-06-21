import React from "react";
import "./Photos.css";

const Photos = () => {
  return (
    <section className="photos">
      <h3>Photos</h3>
      <div className="image-container">
        <div className="images image-1">
          <img
            src="https://static.wixstatic.com/media/486ab4_f862658b256f48629b3a5e0baf3c4b5a~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_f862658b256f48629b3a5e0baf3c4b5a~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-2">
          <img
            src="https://static.wixstatic.com/media/486ab4_029c02f8855340b2b567783c7b5c92d5~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_029c02f8855340b2b567783c7b5c92d5~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-3">
          <img
            src="https://static.wixstatic.com/media/486ab4_4c595e69e5034e089581876de316ba12~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_4c595e69e5034e089581876de316ba12~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-4">
          <img
            src="https://static.wixstatic.com/media/486ab4_b3f4b499a370400fa6354142f8763838~mv2.png/v1/fill/w_1225,h_628,al_c,q_90,usm_0.66_1.00_0.01/486ab4_b3f4b499a370400fa6354142f8763838~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-5">
          <img
            src="https://static.wixstatic.com/media/486ab4_e746188820d44447beccf55a872d173b~mv2.jpeg/v1/fill/w_1225,h_628,al_c,q_85,usm_0.66_1.00_0.01/486ab4_e746188820d44447beccf55a872d173b~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-6">
          <img
            src="https://static.wixstatic.com/media/486ab4_5d1ad872e2ee4aec942f386e3e2fb709~mv2.jpeg/v1/fill/w_1200,h_615,al_c,q_85/486ab4_5d1ad872e2ee4aec942f386e3e2fb709~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-7">
          <img
            src="https://static.wixstatic.com/media/486ab4_190b05f7f3eb42649fa23c1ce22f6e74~mv2.jpeg/v1/fill/w_1200,h_615,al_c,q_85/486ab4_190b05f7f3eb42649fa23c1ce22f6e74~mv2.webp"
            alt="masjid-photos"
          />
        </div>
        <div className="images image-8">
          <img
            src="https://static.wixstatic.com/media/486ab4_ad2f4e1af8b345cd9f9752c56fc1d062~mv2.png/v1/fill/w_1225,h_628,al_c,q_90,usm_0.66_1.00_0.01/486ab4_ad2f4e1af8b345cd9f9752c56fc1d062~mv2.webp"
            alt="masjid-photos"
          />
        </div>
      </div>
      {/* <div className="modal">
        <span className="close">&times;</span>
        <img className="modalImage" id="img01" alt="masjid-photos" />
      </div> */}
    </section>
  );
};

export default Photos;
