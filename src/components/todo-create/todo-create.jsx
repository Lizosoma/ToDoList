import React, { useState } from 'react';
import styles from './todo-create.module.css';
import AddIcon from '../../assets/pictures/add.svg';

const TodoCreate = ({ createTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({ title: '', date: '' });

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
    let formErrors = {};
    if (!title) {
      formErrors.title = 'Title is required';
    }
    if (!date) {
      formErrors.date = 'Date is required';
    }
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      createTodo(title, desc, date);
      setTitle('');
      setDesc('');
      setDate('');
      setErrors({ title: '', date: '' });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        required
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        value={title}
        onChange={handleChangeTitle}
      />
      {errors.title && <p className={styles.error}>{errors.title}</p>}
      <input
        className={styles.input}
        type="text"
        name="description"
        placeholder="Description"
        value={desc}
        onChange={handleChangeDesc}
      />
      <input
        className={styles.input}
        required
        type="date"
        name="date"
        min={new Date().toISOString().split('T')[0]}
        value={date}
        onChange={handleChangeDate}
      />
      {errors.date && <p className={styles.error}>{errors.date}</p>}
      <button className={styles.button} type="submit" onClick={handleSubmit}>
        <img className={styles.img} src={AddIcon} alt="Add" />
      </button>
    </form>
  );
};

export default TodoCreate;
