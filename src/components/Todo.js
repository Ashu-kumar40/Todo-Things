import React, { useState } from 'react'
import Header from './Header';
import '../CSS/global.css'
// import ListItems from './ListItems';

export default function Todo() {

    // const [todo, setTodo] = useState("");
    // const [todoList, setTodolist] = useState([]);

    // const HandleTodo = (event) => {
    //     setTodo(event.target.value);
    // }
    // const HandleSubmit = (event) =>{
    //     event.preventDefault();
    //     let tempList = todoList;
    //     tempList.push(todo);
    //     setTodolist(tempList);
    //     console.log(todoList);
    //     setTodo("");
    // }
    
  return (
    <div>
      <Header />
      
      {/* <form onSubmit={HandleSubmit}>
        <input type="text" value={todo} onChange={HandleTodo}/>
        <button type='submit'>Add Todo</button>
      </form>
      {todoList.map((item, index) => (
            <ListItems key={index} name={item} />
      ))} */}
    </div>
  )
}
