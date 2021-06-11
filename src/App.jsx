import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';

// app styles
import './app.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy Milk', isEditOn: true },
      { id: 2, isDone: true, title: 'Buy Tv' },
      { id: 3, isDone: false, title: 'Go to Park' },
      { id: 4, isDone: true, title: 'Learn React' },
    ],
    currentTodoId: 4,
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

    //              todos: todos
    this.setState({ todos });
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

    // sukuriam nauja todo obj (panaudojam currentTodoId)

    // pridedam prie kopijos nauja todo obj

    // set State atnaujima, todos ir currentTodoId
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList
          onDelete={this.handleDelete}
          onDoneUndone={this.handleDoneUndone}
          todos={this.state.todos}
        />
        <AppAddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
