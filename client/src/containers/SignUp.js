import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '.././actions/userActions';

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
    this.props.history.push('/');
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={this.state.firstname}
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={this.state.lastname}
          onChange={this.handleChange}>
        </input>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}>
        </input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}>
        </input>
        <input value="Sign Up" type="submit"/>
      </form>
    )
  }

}

export default connect(null, {signup})(SignUp);
