import React, { useState } from "react";
// import {
//   FaRegCircle,
//   FaCircle,
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";
import "./Events.css";

const arrPics = [
  "https://static.wixstatic.com/media/486ab4_8cf1bfea01704dcfb9d3ca7f66c99122~mv2.png/v1/crop/x_1,y_0,w_538,h_498,q_85/486ab4_8cf1bfea01704dcfb9d3ca7f66c99122~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_79a67f887828429685f96d81b11c121e~mv2.png/v1/fill/w_673,h_623,al_t,q_90,usm_0.66_1.00_0.01/486ab4_79a67f887828429685f96d81b11c121e~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_83334a047b6e44109ec64b8b635ab18e~mv2.jpg/v1/fill/w_673,h_623,al_t,q_85,usm_0.66_1.00_0.01/486ab4_83334a047b6e44109ec64b8b635ab18e~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_df0cf0ebb0f24aa1a5923319b2ff30a7~mv2.png/v1/fill/w_673,h_623,al_t,q_90,usm_0.66_1.00_0.01/486ab4_df0cf0ebb0f24aa1a5923319b2ff30a7~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_9402ddb2d7a64f45ab6eef77e2a20297~mv2.png/v1/fill/w_673,h_623,al_t,q_90,usm_0.66_1.00_0.01/486ab4_9402ddb2d7a64f45ab6eef77e2a20297~mv2.webp",
  "https://static.wixstatic.com/media/486ab4_6538cd63e78b4cbdbb863e345b8149b5~mv2.png/v1/fill/w_673,h_623,al_t,q_90,usm_0.66_1.00_0.01/486ab4_6538cd63e78b4cbdbb863e345b8149b5~mv2.webp",
];

const Events = () => {
  const [image, setImage] = useState(arrPics[0]);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % arrPics.length), // <-- increment index
      3500
    );
    return () => clearInterval(timerId);
  }, []);

  React.useEffect(() => {
    setImage(arrPics[index]); // <-- update media state when index updates
  }, [index]);

  return (
    <div className="events">
      <div className="slideshow">
        <img src={image} alt="events-slideshow" />
      </div>
    </div>
  );
};

export default Events;
