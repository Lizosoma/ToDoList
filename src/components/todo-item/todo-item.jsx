import React, { useEffect, useState } from 'react';
import TodoEdit from '../todo-edit';

import styles from './todo-item.module.css';
import DeleteIcon from '../../assets/pictures/delete.svg';
import EditIcon from '../../assets/pictures/edit.svg';
import CompteteIcon from '../../assets/pictures/complete.svg';
import UncompleteIcon from '../../assets/pictures/uncomplete.svg';

const TodoItem = ({ todo, removeTodo, changeTodo }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNew(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEdit = (e) => {
    setShowEdit(true);
  };

  const handleDelete = (e) => {
    setIsDeleting(true);
    setTimeout(() => {
      removeTodo(todo.id);
    }, 500);
  };

  const handleComplete = (e) => {
    changeTodo(todo.id, todo.title, todo.desc, todo.date, !todo.completed);
  };

  const handleSubmit = (id, title, desc, date) => {
    changeTodo(id, title, desc, date);
    setShowEdit(false);
  };

  if (showEdit) {
    return (
      <li>
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      </li>
    );
  }

  return (
    <li
      className={`${styles.todoItem} ${todo.completed ? styles.todoItemCompleted : ''} ${
        isDeleting ? styles.fadeOutRight : ''
      } ${isNew ? styles.fadeInLeft : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.info}>
          <p className={styles.title}>{todo.title}</p>
          <p className={styles.date}>{todo.date}</p>
        </div>
        <p className={styles.desc}>{todo.desc}</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleEdit}>
          <img className={styles.img} src={EditIcon} alt="Edit" />
        </button>
        <button className={styles.button} onClick={handleComplete}>
          {todo.completed ? (
            <img className={styles.img} src={UncompleteIcon} alt="Uncomplete" />
          ) : (
            <img className={styles.img} src={CompteteIcon} alt="Complete" />
          )}
        </button>
        <button className={styles.button} onClick={handleDelete}>
          <img className={styles.img} src={DeleteIcon} alt="Delete" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
