import React from 'react';

const BookList = (props) => {

  let renderList;

  if (props.books != null && props.books.length > 0) {
    renderList = props.books.map(book => {
      return(
        <li className="google-book" key={book.id}>
          <img src={book.volumeInfo.imageLinks.smallThumbnail}></img><br></br>
          {book.volumeInfo.title}<br></br>
          {book.volumeInfo.authors ? (
            <div>
              <small>by {book.volumeInfo.authors[0]}</small>
              <br></br><br></br>
            </div>
          ) : ("")}
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

export default BookList;
