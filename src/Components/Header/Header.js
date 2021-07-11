import React, { useState } from "react";
import Nav from "./Nav/Nav";
import { FiMenu } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const onClickHandler = () => {
    if (toggleNav === false) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  };

  // console.log(window.scrollY());

  // document.addEventListener('scroll',

  return (
    <header className="header">
      <div className="header-container">
        <FiMenu className="hamburger-menu" onClick={onClickHandler} />
        <div className="logo">
          <img
            src="https://static.wixstatic.com/media/486ab4_981405625f38479d850ef43b2344b730~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01/Masjid%20Al%20Birr%202%20-%20Copy.webp"
            alt="logo"
          />
        </div>
        <Nav toggleNav={toggleNav} onClickHandler={onClickHandler} />
      </div>
    </header>
  );
};

export default Header;
