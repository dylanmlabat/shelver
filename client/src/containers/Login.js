import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../.././actions/userActions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

}
