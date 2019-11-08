import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/userActions.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Navbar />
      </div>
    )
  }

}

export default connect(null, {getCurrentUser})(App);
