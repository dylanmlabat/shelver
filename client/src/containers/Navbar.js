import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Navbar extends Component {

  render() {
    let showTabs;
    let user = this.props.user

    if (user !== null && user.id) {
      showTabs = (
        <>
          <NavLink to={"/"+user.username} className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Library</span>
          </NavLink>
          <NavLink to="/logout" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Logout</span>
          </NavLink>
        </>
      )
    } else {
      showTabs = (
        <>
          <NavLink to="/signup" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Sign Up</span>
          </NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Log In</span>
          </NavLink>
        </>
      )
    }

    return(
      <div className="Navbar">
        <NavLink to="/search" className="nav-link" activeClassName="selected-tab">
          <span className="tab-title">Search</span>
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="selected-tab">
          <span className="tab-title">About</span>
        </NavLink>
        <NavLink exact to="/" className="nav-link" activeClassName="selected-tab">
          <span className="app-title">Shelver</span>
        </NavLink>
        { showTabs }
      </div>
    )
  }

}

export default Navbar;
