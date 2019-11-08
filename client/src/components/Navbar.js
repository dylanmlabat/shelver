import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../containers/Login';
import Logout from './Logout';

class Navbar extends Component {

  render() {
    return(
      <div>
        {this.props.user ? <Logout /> : <Login />}
      </div>
    )
  }

}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(Navbar);
