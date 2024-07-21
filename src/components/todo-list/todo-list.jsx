import React from 'react';
import { TodoItem } from '../todo-item';
import styles from './todo-list.module.css';

const TodoList = ({ todos, removeTodo, changeTodo }) => {
  const todoList = todos?.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} changeTodo={changeTodo} />;
  });

  return todos?.length !== 0 ? <ul className={styles.todoList}>{todoList}</ul> : 'No todos yet';
};

export default TodoList;
