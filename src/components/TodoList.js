import React from "react";
import TodoItem from "./TodoItem";
import styles from "../CSS/Style.module.css";

export default function TodoList({ todoList }) {
  return (
    <div className={styles.todoList}>
        {todoList.map((todo) =>(
            <TodoItem todo={todo} />
        ))}
    </div>
  );
}
