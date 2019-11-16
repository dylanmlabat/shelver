import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findOrCreateBook } from '../../actions/bookActions';
import { createPurchase } from '../../actions/libraryActions';

class BookList extends Component {

  constructor() {
    super();
    this.state = {
      disabled: []
    };
  }


  handleClick = async (event, book, user) => {
    event.preventDefault();
    let bookJson = await this.props.findOrCreateBook(book);
    this.props.createPurchase(bookJson, user);
    this.setState({
      disabled: [...this.state.disabled, book.id]
    })
  }

  render() {
    let renderList;
    let user = this.props.user

    if (this.props.books != null && this.props.books.length > 0) {
      renderList = this.props.books.map(book => {
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
            <button onClick={(event) => this.handleClick(event, book, user)} disabled={this.state.disabled.indexOf(book.id) !==- 1}>
              Add to Library
            </button>
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

export default connect(mapStateToProps, {findOrCreateBook, createPurchase})(BookList);
