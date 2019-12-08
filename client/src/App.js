import React from 'react';
import './App.css';
import Navbar from './containers/Navbar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import {logout, getCurrentUser} from './actions/userActions.js'
import SignUp from './containers/Account/SignUp';
import Login from './containers/Account/Login';
import Home from './components/Home';
import About from './components/About';
import Books from './components/Books';
import Library from './components/Library';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar user={this.props.user}/>
          <div className="app-background">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search' component={Books} />
              <Route exact path='/about' component={About} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/login' component={Login} />
              <Route path='/logout'
                render={props => {
                  this.props.logout();
                  return <Redirect to='/' />
                }}
              />
              <Route exact path='/:username'
                render={({match}) => <Library user={this.props.user} match={match} />}
              />
            </Switch>
          </div>
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

export default connect(mapStateToProps, {logout, getCurrentUser})(App);
