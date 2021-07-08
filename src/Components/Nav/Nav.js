import React from "react";
import { NavLink } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "./Nav.css";

const Nav = (props) => {
  return (
    <div className={`nav-bar ${props.toggleNav ? "active" : "hidden"}`}>
      <GrClose className="close-modal" onClick={props.onClickHandler} />
      <nav className="nav">
        <NavLink to="/" activeClassName="active" className="nav-links">
          HOME
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="nav-links">
          ABOUT
        </NavLink>
        <NavLink to="/events" activeClassName="active" className="nav-links">
          EVENTS
        </NavLink>
        <NavLink to="/services" activeClassName="active" className="nav-links">
          SERVICES
        </NavLink>
        <NavLink to="/contact" activeClassName="active" className="nav-links">
          CONTACT
        </NavLink>
        <NavLink to="/donate" activeClassName="active" className="nav-links">
          DONATE
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
