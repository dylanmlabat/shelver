import React, { Component } from 'react';
import {connect} from 'react-redux';
import BookSearch from '../containers/Books/BookSearch';
import BookList from '../containers/Books/BookList';

class Books extends Component {

  render(){
    const books = this.props.books

    return(
      <div className="Books">
        <h2 className="route-title">Search Google Books Database</h2>
        <br></br>
        <div className="book-list">
          <BookSearch />
          <BookList books={books}/>
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

export default connect(mapStateToProps)(Books);
