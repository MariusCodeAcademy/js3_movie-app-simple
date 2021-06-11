import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';

// app styles
import './app.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk' },
      { id: 2, isDone: true, title: 'Buy Tv' },
      { id: 3, isDone: false, title: 'Go to Park' },
      { id: 4, isDone: false, title: 'Learn React' },
    ],
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList todos={this.state.todos} />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
