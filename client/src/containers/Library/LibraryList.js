import React from 'react';

const LibraryList = (props) => {

  let renderList;

  if (props.books.length > 0) {
    renderList = props.books.map(book => {
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

export default LibraryList;
