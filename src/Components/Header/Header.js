import React, { useState, useEffect } from "react";
import Nav from "./Nav/Nav";
import { FiMenu } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [scrolledHeader, setScrolledHeader] = useState(false);

  const onClickHandler = () => {
    if (toggleNav === false) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  };

  const onCloseHandler = (value) => {
    if (value === true) {
      setToggleNav(false);
    }
  };

  document.addEventListener("scroll", () => {
    let scrolledPosition = window.scrollY;
    if (scrolledPosition > 10) {
      setScrolledHeader(true);
    } else {
      setScrolledHeader(false);
    }
  });

  useEffect(() => {
    let windowSize = window.innerWidth;
    if (windowSize >= 1024) {
      setToggleNav(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    let windowSize = window.innerWidth;
    if (windowSize >= 1024) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  });

  return (
    <header className={scrolledHeader ? "scrolled-header" : "header"}>
      <div className="header-container">
        <FiMenu className="hamburger-menu" onClick={onClickHandler} />
        <div className="logo">
          <img
            src="https://static.wixstatic.com/media/486ab4_981405625f38479d850ef43b2344b730~mv2.png/v1/fill/w_134,h_134,al_c,q_85,usm_0.66_1.00_0.01/Masjid%20Al%20Birr%202%20-%20Copy.webp"
            alt="logo"
          />
        </div>
        <Nav toggleNav={toggleNav} onClose={onCloseHandler} />
      </div>
    </header>
  );
};

export default Header;
