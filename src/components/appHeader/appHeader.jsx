import React, { Component } from 'react';
// import style
import './style.css';
// add image
import heroImg from './hero.jpg';

class AppHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <img className="hero" src={heroImg} alt="Very nice view of a sky" />
      </header>
    );
  }
}

export default AppHeader;
