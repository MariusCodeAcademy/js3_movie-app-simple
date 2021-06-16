import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    );
  }
}

export default Navbar;
