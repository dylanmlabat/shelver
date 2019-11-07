import React from 'react';
import './App.css';
import Login from './containers/Login';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/userActions.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <Login />
    )
  }

}

export default connect(null, {getCurrentUser})(App);
