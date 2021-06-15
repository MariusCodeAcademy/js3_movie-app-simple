import React, { Component } from 'react';
// importuojam modulini individualu css
import navStyles from './navbar.module.css';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className={navStyles.nabar}>
        <a className="logo" href="/">
          ReactApp
        </a>
        <div className="nav-links">
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/todos">
            Todos
          </a>
          <a className="nav-link" href="/about">
            About
          </a>
          <a className="nav-link" href="/contact">
            About
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
