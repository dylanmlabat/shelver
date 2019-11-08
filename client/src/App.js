import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {getCurrentUser} from './actions/userActions.js'
import Login from './containers/Login';
import Logout from './components/Logout';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar user={this.props.user}/>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </Router>
      </div>
    )
  }

}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
