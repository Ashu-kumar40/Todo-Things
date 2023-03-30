import React from "react";
import styles from "../CSS/Style.module.css";
import { nanoid } from 'nanoid';

export default function Form({ todo, setTodo, todoList, setTodolist }) {

  const HandleChange = (event) => {
    setTodo(event.target.value);
    // console.log(todo);
  };

  const HandleSubmit =(event) =>{
    event.preventDefault();
    setTodolist([...todoList, {name:todo, id:nanoid(5)}]);
    // in the above line, we are using the spread operator to copy the todoList array and then adding the new todo to it. the three dots (...) are the spread operator.
    console.log(todoList);
    setTodo("")
  }
  return (
    <div>
      <form 
      className={styles.form}
      onSubmit={HandleSubmit}
      >
        <input
          className={styles.inputTitle}
          type="text"
          placeholder="Add a Title"
          value={todo}
          onChange={HandleChange}
        ></input>
        <button className={styles.addBtn} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
