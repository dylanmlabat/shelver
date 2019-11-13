import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGoogleBooks } from '../../actions/bookActions';

class BookSearch extends Component {

  constructor() {
    super();
    this.state = {
      books: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGoogleBooks(this.state.books)
  }

  render() {
    return(
      <div className="route-title">
        <h2>Search Google Books Database</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="books"
              placeholder="Author, Title, or ISBN"
              value={this.state.books}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input value="Search" type="submit"/>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(null, {fetchGoogleBooks})(BookSearch);
