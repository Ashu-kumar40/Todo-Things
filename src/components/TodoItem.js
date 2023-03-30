import React from 'react'
import styles from '../CSS/Style.module.css'
export default function TodoItem({todo, todoList, setTodolist}) {
  const DeleteTodo = () =>{
    setTodolist(todoList.filter(item => item.id !== todo.id));
  }
  return (
    <div className={styles.todoCard}>
      <h3 className={styles.todoHeading}>{todo.name}</h3>
      <button onClick={DeleteTodo} className={styles.doneBtn}>Done</button>
    </div>
  )
}
