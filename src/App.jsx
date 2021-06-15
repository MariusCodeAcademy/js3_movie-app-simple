import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import TodoPage from './components/todoPage/todoPage';

// app styles
import './app.css';
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <TodoPage />
      </div>
    );
  }
}

export default App;
