import React, { Component } from 'react';
import { connect } from 'react-redux';
import { destroyPurchase } from '../../actions/libraryActions';

class LibraryList extends Component {

  handleClick = (event, purchaseId) => {
    event.preventDefault();
    this.props.destroyPurchase(purchaseId);
  }

  render() {
    let renderList;

    if (this.props.books.length > 0) {
      renderList = this.props.books.map(book => {
        let purchaseId = book.purchase_id

        return(
          <li className="book-list-item" key={book.id}>
            {book.cover ? (
              <div>
                <img src={book.cover} alt=""></img><br></br>
              </div>
            ) : ("")}
            {book.title}<br></br>
            {book.authors ? (
              <div>
                <small>by {book.authors[0]}</small>
              </div>
            ) : ("")}
            <br></br>
            <button onClick={(event) => this.handleClick(event, purchaseId)}>Remove from Library</button>
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

export default connect(null, {destroyPurchase})(LibraryList);
