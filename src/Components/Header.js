import React, { useState } from "react";
import Nav from "./Nav";
import { FiMenu } from "react-icons/fi";
import "./Header.css";

const Header = (props) => {
  const [toggleNav, setToggleNav] = useState("false");

  const onClickHandler = () => {
    if (toggleNav === "false") {
      setToggleNav("true");
    } else {
      setToggleNav("false");
    }
  };

  if (toggleNav === "false") {
    return (
      <header className="header">
        <FiMenu className="hamburger-menu" onClick={onClickHandler} />
        <div className="logo">
          <img
            src="https://static.wixstatic.com/media/1cdf96_f2b2ab65f2a14b7f8e01834796e79b60~mv2.png/v1/crop/x_0,y_0,w_2000,h_1632/fill/w_178,h_138,al_c,q_85,usm_0.66_1.00_0.01/Masjid%20Al%20Birr%202.webp"
            alt="logo"
          />
        </div>
      </header>
    );
  }

  if (toggleNav === "true") {
    return (
      <React.Fragment>
        <Nav onClick={onClickHandler} />
      </React.Fragment>
    );
  }
};

export default Header;
