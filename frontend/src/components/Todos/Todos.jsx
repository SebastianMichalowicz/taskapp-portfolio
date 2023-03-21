import React, {useState} from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";


export default function Todos() {
const auth = useSelector(state => state.auth);

  const [task, setTask] = useState({
    task: "",
    isCompleted: false,
  });
  if(!auth._id) return (<Navigate to="/login"/>)

  return (
    <>
      <AddTodo task={task} setTask={setTask}/>
      <TodoList setTask={setTask}/>
    </>
  );
}