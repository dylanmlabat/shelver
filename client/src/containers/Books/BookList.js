import React, { Component } from 'react';

class BookList extends Component {

  handleClick = (event) => {
    event.preventDefault();
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
            <button onClick={this.handleClick}>Add to Library</button>
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

export default BookList;
