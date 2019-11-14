import React, { Component } from 'react';

class LibraryList extends Component {

  render() {
    let renderList;

    if (this.props.books.length > 0) {
      renderList = this.props.books.map(book => {
        return(
          <div className="library-book" key={book.id}>
            {book.title}<br></br>
            <small>by {book.author.firstname} {book.author.lastname}</small>
            <br></br><br></br>
          </div>
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
