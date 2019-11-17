import React, { Component } from 'react';
import { connect } from 'react-redux';
import { disableGoogleBook, findOrCreateBook } from '../../actions/bookActions';
import { createPurchase } from '../../actions/libraryActions';

class BookList extends Component {

  handleClick = async (event, book, user, index) => {
    event.preventDefault();
    this.props.disableGoogleBook(book, index)
    let bookJson = await this.props.findOrCreateBook(book);
    this.props.createPurchase(bookJson, user);
  }

  render() {
    let renderList;
    let user = this.props.user

    if (this.props.books != null && this.props.books.length > 0) {
      renderList = this.props.books.map((book, index) => {
        return(
          <li className="book-list-item" key={book.id}>
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? (
              <div>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt=""></img><br></br>
              </div>
            ) : ("")}
            {book.volumeInfo.title}<br></br>
            {book.volumeInfo.authors ? (
              <div>
                <small>by {book.volumeInfo.authors[0]}</small>
              </div>
            ) : ("")}
            <br></br>
            {(user !== null && user.id) ?
              <button onClick={(event) => this.handleClick(event, book, user, index)} disabled={book.disabled}>
                {book.disabled ? "Added to Library" : "Add to Library"}
              </button> : ""
            }
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

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {disableGoogleBook, findOrCreateBook, createPurchase})(BookList);
