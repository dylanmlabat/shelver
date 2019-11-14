import React from 'react';

const BookList = (props) => {

  let renderList;

  if (props.books != null && props.books.length > 0) {
    renderList = props.books.map(book => {
      return(
        <div className="google-book" key={book.id}>
          {book.volumeInfo.title}
        </div>
      )
    })
  } else {
    renderList = "No results."
  }

  return(
    <div className="BookList">
      {renderList}
    </div>
  )

}

export default BookList;
