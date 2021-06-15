import React, { Component } from 'react';
import AppHeader from '../appHeader/appHeader';
import AppList from '../appList/appList';
import AppAddTodo from '../appAddTodo/appAddTodo';
import { Link } from 'react-router-dom';

import './todo.css';

class TodoPage extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk', isEditOn: false },
      { id: 2, isDone: true, title: 'Buy Tv', isEditOn: false },
      { id: 3, isDone: false, title: 'Go to Park', isEditOn: false },
      { id: 4, isDone: true, title: 'Learn React', isEditOn: false },
    ],
    currentTodoId: 5,
  };

  componentDidMount() {
    this.sortTodos();
  }

  sortTodos() {
    const todos = [...this.state.todos];
    // issirkuoti pagal isDone
    todos.sort((a, b) => a.isDone - b.isDone);

    this.setState({ todos });
  }

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

  handleDoneUndone = (idToCheckUncheck) => {
    // paspaudus rutuliuka
    console.log('done undone', idToCheckUncheck);

    // pasidaryti todos kopija
    const todos = [...this.state.todos];

    // surasti todo kuris paspaude ir pakeisti jo busena
    const found = todos.find((t) => t.id === idToCheckUncheck);

    // pakeisti isDone
    found.isDone = !found.isDone;

    // issirkuoti pagal isDone
    // todos.sort((a, b) => a.isDone - b.isDone);
    this.sortTodos();

    //              todos: todos
    // this.setState({ todos });
  };

  handleDelete = (idOfTodoThatWasPressed) => {
    console.log('delete pressed', idOfTodoThatWasPressed);

    // filter todos to not include the one that was pressed delete on
    const todosWithoutOne = this.state.todos.filter((t) => t.id !== idOfTodoThatWasPressed);
    this.setState({ todos: todosWithoutOne });
  };

  handleAddTodo = (todoTitle) => {
    console.log('add new todo', todoTitle);

    // todos state copija
    const todosPlusNew = [...this.state.todos];

    // sukuriam nauja todo obj (panaudojam currentTodoId)
    const newTodo = {
      id: this.state.currentTodoId,
      isDone: false,
      title: todoTitle,
      isEditOn: false,
    };
    // pridedam prie kopijos nauja todo obj
    todosPlusNew.unshift(newTodo);

    // set State atnaujima, todos ir currentTodoId
    this.setState({ todos: todosPlusNew, currentTodoId: this.state.currentTodoId + 1 });
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
