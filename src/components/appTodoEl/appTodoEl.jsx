import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  // padaryti kad ikonele butu priklausoma nuo isDone savybes
  // fa-check-circle - done  fa-circle-thin - kai ne done

  // paspaudus pirma icona bublinam eventa iki app.jsx ir ten vygdom handleCheckUncheck
  state = {};
  render() {
    const { id, title, isDone } = this.props.singleTodo;

    return (
      <li className="app-todo-el">
        <i onClick={() => this.props.onDoneUndone(id)} className={this.setCheckClasses(isDone)}></i>
        <span className={isDone ? 'doneTitle' : ''}>{title}</span>
        <i className="fa fa-pencil"></i>
        <i className="fa fa-trash"></i>
      </li>
    );
  }

  setCheckClasses(isDone) {
    let checkClasses = 'fa fa-circle-thin';
    if (isDone) checkClasses = 'fa fa-check-circle';
    return checkClasses;
  }
}

export default AppTodoEl;
