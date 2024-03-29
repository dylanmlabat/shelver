import React, { Component } from 'react';

class About extends Component {

  render(){
    return(
      <div className="About">
        <h2 className="route-title">About Shelver</h2>
        <br></br>
        <span className="about-paragraph">
          <p>
            Shelver allows you to create a sharable and easily perusable digital catalog of the books you own.
            You can search for books within the Google Books database by title, author, or ISBN and easily add them to your personal library.
          </p>
          <p>This is a React on Rails portfolio project for the Flatiron School's web development bootcamp.</p>
        </span>
      </div>
    )
  }

}

export default About;
