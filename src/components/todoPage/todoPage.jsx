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
      // { id: 1, isDone: false, title: 'Buy Milk', isEditOn: false },
      // { id: 2, isDone: true, title: 'Buy Tv', isEditOn: false },
      // { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },
      // { id: 4, isDone: true, title: 'Learn React', isEditOn: false },
    ],
    currentTodoId: 5,
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    GetSendData.getAll((data) => {
      this.setState({ todos: data });
    });
  };

  handleEdit = (editId, newTitleVal) => {
    console.log('handleEdit', editId, newTitleVal); // gaunu abi reiksmes

    // kai turiu id pakeisti to el isEditOn savybe i priesinga dabartinei
    // pasidaryti kopija todos
    const copyTodos = [...this.state.todos];

    // surasti ta obj kuris buvo paspaustas
    const found = copyTodos.find((t) => t.id === editId);

    // patikrinti ar reikia issaugoti reiksme
    if (found.isEditOn) {
      found.title = newTitleVal;
    }

    // isversti boolean reiksme
    found.isEditOn = !found.isEditOn;
    // set state
    this.setState({ todos: copyTodos });
  };

  handleDoneUndone = (idToCheckUncheck, newState) => {
    // paspaudus rutuliuka

    GetSendData.doDoneUndone(idToCheckUncheck, newState);
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
    GetSendData.createTodo(todoTitle, () => {
      this.getTodos();
    });
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
        <AppAddTodo onAddTodo={this.handleAddTodo} />
        <Link to="/about">Go to About us page</Link>
      </div>
    );
  }
}

export default TodoPage;

// pasidaryti FavoriteCompooenta
// tuscia zvaigzdute kai neijungta ir pilna kai ijungta
