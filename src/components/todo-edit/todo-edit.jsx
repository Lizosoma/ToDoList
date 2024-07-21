import React, { useState } from 'react';
import styles from './todo-edit.module.css';
import SaveIcon from '../../assets/pictures/save.svg';

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const [date, setDate] = useState(todo.date);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(todo.id, title, desc, date);
  };

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" value={title} onChange={handleChangeTitle} />
      <input className={styles.input} type="text" value={desc} onChange={handleChangeDesc} />
      <input className={styles.input} type="date" value={date} onChange={handleChangeDate} />
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        <img className={styles.img} src={SaveIcon} alt="Save" />
      </button>
    </form>
  );
};

export default TodoEdit;
