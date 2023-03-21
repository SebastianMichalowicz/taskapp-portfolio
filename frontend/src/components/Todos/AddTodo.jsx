import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddTodo.css";

import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


import {AddTask, UpdateTask} from "../../store/actions/taskActions";

export default function AddTodo({task, setTask}) {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.username);

  const handleSubmit = e => {
    e.preventDefault();
    //checking if we updating task or creating new one
    if(task._id){
    //Updating task
      const id = task._id;
      const updatedTask = {
        task: task.task,
        isCompleted: task.isCompleted,
        date: task.date,
        email: task.email,
        id: task._id,
        author: task.author,
      }
      dispatch(UpdateTask(updatedTask, id));
    }else {
      //dispatching new task
      const newTask = {
        ...task,
        date: new Date(),
      };
      dispatch(AddTask(newTask));
    }   
    //reset task textarea after submit
    setTask({
      task:"",
      isCompleted: false,
    })
  }

  return (
    <>
    <h4 style={{textAlign: "center"}}>Hello {userInfo}!</h4>
      <form className="todo_form" action="" onSubmit={handleSubmit}>
        
        <TextField
          autoFocus
          id="newtask"
          label="New task"
          sx={{ width: "60vw" }}
          variant="filled"
          value= {task.task}
          onChange={(e)=> setTask({...task, task: e.target.value})}
        />
        <Button type="submit" className="todo_form-button">
          <AddIcon fontSize="large" />
        </Button>
      </form>
    </>
  );
}
