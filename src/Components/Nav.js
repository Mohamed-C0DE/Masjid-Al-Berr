import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./Nav.css";

const Nav = (props) => {
  const closeNav = () => {
    props.onClick();
  };

  return (
    <div className="nav">
      <GrFormClose className="close-modal" onClick={closeNav} />
      <nav className="nav-bar">
        <p className="nav-links">HOME</p>
        <p className="nav-links">ABOUT</p>
        <p className="nav-links">EVENTS</p>
        <p className="nav-links">SERVICES</p>
        <p className="nav-links">CONTACT</p>
        <p className="nav-links">DONATE</p>
      </nav>
    </div>
  );
};

export default Nav;
