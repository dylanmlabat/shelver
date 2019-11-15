import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findOrCreateBook } from '../../actions/bookActions';

class BookList extends Component {

  handleClick = (event, book) => {
    event.preventDefault();
    this.props.findOrCreateBook(book)
  }

  render() {
    let renderList;

    if (this.props.books != null && this.props.books.length > 0) {
      renderList = this.props.books.map(book => {
        return(
          <li className="book-list-item" key={book.id}>
            <img src={book.volumeInfo.imageLinks.smallThumbnail}></img><br></br>
            {book.volumeInfo.title}<br></br>
            {book.volumeInfo.authors ? (
              <div>
                <small>by {book.volumeInfo.authors[0]}</small>
              </div>
            ) : ("")}
            <br></br>
            <button onClick={(event) => this.handleClick(event, book)}>Add to Library</button>
          </li>
        )
      })
    }

    return(
      <div className="BookList">
        {renderList}
      </div>
    )
  }

}

export default connect(null, {findOrCreateBook})(BookList);
