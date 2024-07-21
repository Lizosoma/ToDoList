import React, { useState, useEffect } from 'react';
import TodoList from './components/todo-list';
import TodoCreate from './components/todo-create';
import HeaderButton from './ui/header-button';

import './assets/styles/global.css';
import AllIcon from './assets/pictures/all.svg';
import CompletedIcon from './assets/pictures/completed.svg';
import UncompletedIcon from './assets/pictures/uncompleted.svg';
import SortByCompletionIcon from './assets/pictures/sort-by-comp.svg';
import SortByCreationIcon from './assets/pictures/sort-by-creat.svg';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const createTodo = (title, desc, date) => {
    const newTodo = { id: Date.now(), title, desc, date, completed: false };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const changeTodo = (id, title, desc, date, completed = false) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title, desc, date, completed };
      }
      return todo;
    });

    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') {
      return todo.completed;
    } else if (filter === 'uncompleted') {
      return !todo.completed;
    } else {
      return true;
    }
  });

  const sortTodosByCompletionDate = () => {
    setTodos([...todos].sort((a, b) => new Date(a.date) - new Date(b.date)));
  };

  const sortTodosByCreationDate = () => {
    setTodos([...todos].sort((a, b) => a.id - b.id));
  };

  return (
    <div className="container">
      <header className="header">
        <HeaderButton img={AllIcon} alt="All" onClick={() => setFilter('all')} />
        <HeaderButton img={CompletedIcon} alt="Completed" onClick={() => setFilter('completed')} />
        <HeaderButton
          img={UncompletedIcon}
          alt="Uncompleted"
          onClick={() => setFilter('uncompleted')}
        />
        <HeaderButton
          img={SortByCompletionIcon}
          alt="Sort by completion date"
          onClick={sortTodosByCompletionDate}
        />
        <HeaderButton
          img={SortByCreationIcon}
          alt="Sort by creation date"
          onClick={sortTodosByCreationDate}
        />
      </header>
      <h1>To-Do List</h1>
      <TodoCreate createTodo={createTodo} />
      <TodoList todos={filteredTodos} removeTodo={removeTodo} changeTodo={changeTodo} />
    </div>
  );
}

export default App;
