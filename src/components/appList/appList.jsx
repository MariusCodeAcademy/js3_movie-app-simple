import React, { Component } from 'react';
import TodoEl from '../appTodoEl/appTodoEl';
import './style.css';
class AppList extends Component {
  state = {};
  render() {
    console.log(this.props.todos);
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <TodoEl singleTodo={t} key={t.id}></TodoEl>
        ))}
      </ul>
    );
  }
}

export default AppList;
