import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '.././actions/userActions';

class Logout extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <button onClick={this.handleClick}>Logout</button>
    )
  }

}

export default connect(null, {logout})(Logout);
