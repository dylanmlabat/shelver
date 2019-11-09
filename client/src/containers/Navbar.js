import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  let showTabs;

  if (props.user) {
    showTabs = (
      <>
        <NavLink to={"/"+props.user.username} className="nav-link">
          <span className="tab-title">Library</span>
        </NavLink>
        <NavLink to="/logout" className="nav-link">
          <span className="tab-title">Logout</span>
        </NavLink>
      </>
    )
  } else {
    showTabs = (
      <>
        <NavLink to="/signup" className="nav-link">
          <span className="tab-title">Sign Up</span>
        </NavLink>
        <NavLink to="/login" className="nav-link">
          <span className="tab-title">Log In</span>
        </NavLink>
      </>
    )
  }

  return(
    <div className="navbar">
      <NavLink to="/about" className="nav-link">
        <span className="tab-title">About</span>
      </NavLink>
      <NavLink to="/" className="nav-link">
        <span className="tab-title">Shelver</span>
      </NavLink>
      { showTabs }
    </div>
  )

}

export default Navbar;
