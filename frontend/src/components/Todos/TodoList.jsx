import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {GetTasks} from "../../store/actions/taskActions";
import Todo from "./Todo";
import "./TodoList.css";



export default function TodoList({setTask}) {
  const dispatch = useDispatch();
  const tasks = useSelector((state)=> state.tasks);
  useEffect(()=> {
    dispatch(GetTasks());
  }, [dispatch]);

  return (
    <>
    <div className="todo_list">
      {tasks && tasks.map((task) => {
        return (
          <Todo
            task={task}
            key={task._id}
            setTask = {setTask}
          />
        )
      })}
    </div>
    </>
  );
}