import React from "react";
import x from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={x.nav}>
      <div className={x.item}>
        <NavLink to="/Profile" className={ as=>as.isActive ? x.activeLink : x.color}>Profile</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to="/Dialogs" className={ as=>as.isActive ? x.activeLink : x.color}>Message</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to="/News" className={ as=>as.isActive ? x.activeLink : x.color}>News</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to="/Music" className={ as=>as.isActive ? x.activeLink : x.color}>Music</NavLink>
      </div>
      <div className={x.item}>
        <NavLink to="/Settings" className={ as=>as.isActive ? x.activeLink : x.color}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
