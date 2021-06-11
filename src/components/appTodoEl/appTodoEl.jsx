import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle - done  fa-circle-thin - kai ne done
  state = {};
  render() {
    return (
      <li className="app-todo-el">
        <i className="fa fa-check-circle fa-circle-thin"></i>
        <span>{this.props.singleTodo.title}</span>
        <i className="fa fa-pencil"></i>
        <i className="fa fa-trash"></i>
      </li>
    );
  }
}

export default AppTodoEl;
