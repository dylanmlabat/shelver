import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/userActions';

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    this.props.history.push('/');
  }

  render() {
    return(
      <div className="Login">
        <h2 className="account-title">Log In</h2>
        <br></br>
        <div className="account-form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input value="Log In" type="submit"/>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(null, {login})(Login);
