import React, { Component } from 'react';
import LibraryList from '../containers/Library/LibraryList'
import { connect } from 'react-redux';
import { findUser } from '../actions/userActions'

class Library extends Component {

  componentDidMount(){
    this.props.findUser(this.props.match.params.username)
  }

  render(){
    const user = this.props.user

    return(
      <div className="Library">
        <h2 className="route-title">{user.firstname}'s Library</h2>
        <br></br>
        <div className="book-list">
          <LibraryList books={user.books} />
        </div>
      </div>
    )
  }

}

export default connect(null, {findUser})(Library);
