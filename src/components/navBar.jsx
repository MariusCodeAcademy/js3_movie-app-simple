import React, { Component } from 'react';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
    );
  }
}

export default Navbar;
