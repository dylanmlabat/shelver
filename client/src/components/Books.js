import React, { Component } from 'react';
import BookSearch from '../containers/Books/BookSearch';
import BookList from '../containers/Books/BookList';

class Books extends Component {

  render(){

    return(
      <div className="Books">
        <h2 className="route-title">Search Google Books Database</h2>
        <br></br>
        <div className="book-list">
          <BookSearch />
          <br></br>
          <BookList />
        </div>
      </div>
    )
  }

}

const mapStateToProps = ({books}) => {
  return {
    books
  }
}

export default Books;
