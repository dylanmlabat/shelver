import React, { Component } from 'react';

class LibraryList extends Component {

  render() {
    let renderList;

    if (this.props.books.length > 0) {
      renderList = this.props.books.map(book => {
        return(
          <li className="book-list-item" key={book.id}>
            <img src={book.cover} alt=""></img>
            {book.cover ? (<img src={book.cover} alt=""></img>) : ("")}<br></br>
            {book.title}<br></br>
            {book.authors ? (<small>by {book.authors[0]}</small>) : ("")}
            <br></br>
          </li>
        )
      })
    } else {
      renderList = "There are currently no books in the library."
    }

    return(
      <div className="LibraryList">
        {renderList}
      </div>
    )
  }

}

export default LibraryList;
