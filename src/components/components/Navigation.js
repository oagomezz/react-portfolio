import React from "react";
import { NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
      <Nav className="fill-pills">
        <NavItem className="nav-buttons" >
          <NavLink  to="/" className="nav-link">
            Home
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink  to="/aboutme" className="nav-link">
            About Me
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink  to="/portfolio" className="nav-link">
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink to="/techstack" className="nav-link">
            Tech Stack
          </NavLink>
        </NavItem>
        <NavItem className="nav-buttons">
          <NavLink  to="/contactme" className="nav-link">
            Contact Me
          </NavLink>
        </NavItem>
      </Nav>
    )
  }

  export default Navigation