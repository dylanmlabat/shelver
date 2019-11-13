import React, { Component } from 'react';
import {getGoogleSearch} from '../actions/bookActions.js'

class Books extends Component {

  componentDidMount() {
    getGoogleSearch()
  }

  render(){

    return(
      <div className="Books">
      </div>
    )
  }

}

export default Books;
