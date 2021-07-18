import React from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "./Nav.css";
import BorderLine from "../../../UI/BorderLine";

const Nav = (props) => {
  const closeHandler = () => {
    props.onClose(true);
  };

  return (
    <div className={`nav-bar ${props.toggleNav ? "active" : "hidden"}`}>
      <GrClose className="close-modal" onClick={closeHandler} />
      <nav className="nav">
        <NavLink exact to="/" activeClassName="active" className="nav-links">
          HOME
        </NavLink>
        <BorderLine />
        <NavLink
          exact
          to="/about"
          activeClassName="active"
          className="nav-links"
        >
          ABOUT
        </NavLink>
        <BorderLine />
        <NavLink
          exact
          to="/events"
          activeClassName="active"
          className="nav-links"
        >
          EVENTS
        </NavLink>
        <BorderLine />
        <NavLink
          exact
          to="/services"
          activeClassName="active"
          className="nav-links"
        >
          SERVICES
        </NavLink>
        <BorderLine />
        <NavLink
          exact
          to="/contact"
          activeClassName="active"
          className="nav-links"
        >
          CONTACT
        </NavLink>
        <BorderLine />
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
