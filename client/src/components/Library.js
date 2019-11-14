import React, { Component } from 'react';
import LibraryList from '../containers/Library/LibraryList'

class Library extends Component {

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

export default Library;
