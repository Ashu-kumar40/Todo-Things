import React from "react";
import TodoItem from "./TodoItem";
import styles from "../CSS/Style.module.css";

export default function TodoList({ todoList, setTodolist }) {
  return (
    <div className={styles.todoList}>
      {todoList.map((todo) => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        todoList={todoList}
        setTodolist={setTodolist}
        />
      ))}
    </div>
  );
}
