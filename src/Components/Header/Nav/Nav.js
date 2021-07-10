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
        <NavLink
          exact
          to="/about"
          activeClassName="active"
          className="nav-links"
        >
          ABOUT
        </NavLink>
        <NavLink
          exact
          to="/events"
          activeClassName="active"
          className="nav-links"
        >
          EVENTS
        </NavLink>
        <NavLink
          exact
          to="/services"
          activeClassName="active"
          className="nav-links"
        >
          SERVICES
        </NavLink>
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
