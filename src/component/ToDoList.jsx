import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({todolist, onCheckBtnClick}) {
  return (
    <>
      {
        todolist.map(todo => <ToDo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>)
      }
    </>
  );
}
