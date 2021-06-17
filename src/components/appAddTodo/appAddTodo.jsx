import React, { Component } from 'react';
import './style.css';
class AppAddTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    if (this.state.newTodo.length <= 3) {
      this.props.onErrorFeedback({ addTodo: 'The title is too short' });
      return;
    }
    console.log('sendAddTodo');
    this.props.onAddTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  handleEnter = (e) => {
    // console.log(e.keyCode); // 13 === enter
    // if (e.keyCode === 13) this.sendAddTodo();

    // JeiSalygaTrue && vygdomSita
    e.keyCode === 13 && this.sendAddTodo();
  };

  render() {
    return (
      <div className="add-todo-container">
        <i onClick={this.sendAddTodo} className="fa fa-plus-circle add-icon"></i>
        <input
          className={this.props.errors && 'is-invalid'}
          onChange={this.handleChange}
          onKeyUp={this.handleEnter}
          value={this.state.newTodo}
          type="text"
          placeholder="Add new Todo"
        />
        {this.props.errors && <p className="error-msg">{this.props.errors}</p>}
      </div>
    );
  }
}

export default AppAddTodo;
