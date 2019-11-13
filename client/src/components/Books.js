import React, { Component } from 'react';
import BookSearch from '../containers/Books/BookSearch';

class Books extends Component {

  render(){

    return(
      <div className="Books">
        <BookSearch />
      </div>
    )
  }

}

export default Books;
