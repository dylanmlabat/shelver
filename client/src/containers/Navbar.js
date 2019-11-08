import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  let showTabs;

  if (props.user) {
    showTabs = (
      <NavLink to="/logout">Logout</NavLink>
    )
  } else {
    showTabs = (
      <NavLink to="/login">Log In</NavLink>
    )
  }

  return(
    <div className="Navbar">
      <NavLink to="/">Shelver</NavLink>
      { showTabs }
    </div>
  )

}

export default Navbar;
