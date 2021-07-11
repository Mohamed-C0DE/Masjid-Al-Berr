import React from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className={`nav-bar ${props.toggleNav ? "active" : "hidden"}`}>
      <GrClose className="close-modal" onClick={props.onClickHandler} />
      <nav className="nav">
        <NavLink exact to="/" activeClassName="active" className="nav-links">
          HOME
        </NavLink>
        <span className="border-line"></span>
        <NavLink
          exact
          to="/about"
          activeClassName="active"
          className="nav-links"
        >
          ABOUT
        </NavLink>
        <span className="border-line"></span>
        <NavLink
          exact
          to="/events"
          activeClassName="active"
          className="nav-links"
        >
          EVENTS
        </NavLink>
        <span className="border-line"></span>
        <NavLink
          exact
          to="/services"
          activeClassName="active"
          className="nav-links"
        >
          SERVICES
        </NavLink>
        <span className="border-line"></span>
        <NavLink
          exact
          to="/contact"
          activeClassName="active"
          className="nav-links"
        >
          CONTACT
        </NavLink>
        <span className="border-line"></span>
        <NavLink
          exact
          to="/donate"
          activeClassName="active"
          className="nav-links"
        >
          DONATE
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
