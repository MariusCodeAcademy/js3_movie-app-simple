import React, { Component } from 'react';
import AppHeader from '../appHeader/appHeader';
import AppList from '../appList/appList';
import AppAddTodo from '../appAddTodo/appAddTodo';
import { Link } from 'react-router-dom';

// fetch helper class
import GetSendData from '../../service/getSendData';

import './todo.css';

class TodoPage extends Component {
  state = {
    todos: [
      // { id: 1, isDone: false, title: 'Buy Milk', isEditOn: true },
      // { id: 2, isDone: false, title: 'Buy Tv', isEditOn: false },
      // { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },
      // { id: 4, isDone: true, title: 'Learn React', isEditOn: false },
    ],
    errors: {
      addTodo: '',
    },
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    GetSendData.getAll((data) => {
      this.setState({ todos: data });
    });
  };

  validateInput(val) {}

  handleEdit = (editId, newTitleVal, editStatus) => {
    // console.log('handleEdit', editId, newTitleVal); // gaunu abi reiksmes
    this.validateInput(newTitleVal);
    GetSendData.doEdit(editId, newTitleVal, editStatus, () => {
      this.getTodos();
      //redirect
    });
  };

  handleDoneUndone = (idToCheckUncheck, newState) => {
    // paspaudus rutuliuka
    GetSendData.doDoneUndone(idToCheckUncheck, newState, () => {
      this.getTodos();
    });
  };

  handleDelete = (idOfTodoThatWasPressed) => {
    console.log('delete pressed', idOfTodoThatWasPressed);

    GetSendData.deleteTodo(idOfTodoThatWasPressed, (ats) => {
      console.log(ats);
      this.getTodos();
    });
  };

  handleAddTodo = (todoTitle) => {
    console.log('add new todo', todoTitle);
    this.setState({ errors: { addTodo: '' } });
    GetSendData.createTodo(todoTitle, (ats) => {
      console.log(ats);
      if (!ats.success) {
        console.log('gavom klaida fronte');
        this.setState({ errors: { addTodo: 'field canot be blank' } });
      }
      this.getTodos();
    });
  };

  handleError = (errorObj) => {
    console.log('errorObj', errorObj);
    this.setState({ errors: errorObj });
  };

  render() {
    return (
      <div className="todo-page">
        <AppHeader />
        <AppList
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onDoneUndone={this.handleDoneUndone}
          todos={this.state.todos}
        />
        <AppAddTodo
          onErrorFeedback={this.handleError}
          errors={this.state.errors.addTodo}
          onAddTodo={this.handleAddTodo}
        />
        <Link to="/about">Go to About us page</Link>
      </div>
    );
  }
}

export default TodoPage;

// pasidaryti FavoriteCompooenta
// tuscia zvaigzdute kai neijungta ir pilna kai ijungta
