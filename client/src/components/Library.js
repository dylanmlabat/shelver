import React, { Component } from 'react';

class Library extends Component {

  render(){

    const user = this.props.user


    return(
      <div className="Library">
        <h2>{user.firstname}'s Library</h2>
      </div>
    )
  }

}

export default Library;
