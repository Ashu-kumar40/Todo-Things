import React, { useState } from "react";
import Header from "./Header";
import "../CSS/global.css";
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);

  return (
    <div>
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodolist={setTodolist}
      />
      <TodoList setTodolist={setTodolist} todoList={todoList}/>
    </div>
  );
}
