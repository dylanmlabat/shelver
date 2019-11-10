import React, { Component } from 'react';
import LibraryList from '../containers/LibraryList'

class Library extends Component {

  render(){

    const user = this.props.user

    return(
      <div className="Library">
        <h2>{user.firstname}'s Library</h2>
        <LibraryList books={user.books} />
      </div>
    )
  }

}

export default Library;
