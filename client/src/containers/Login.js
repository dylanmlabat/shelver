import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '.././actions/userActions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form>
        <input
          value={this.state.username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleChange}>
        </input>
        <input
          value={this.state.password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleChange}>
        </input>
        <input value="Log In" type="submit"/>
      </form>
    )
  }

}

export default Login;
