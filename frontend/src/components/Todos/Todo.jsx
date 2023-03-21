import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import "./Todo.css";

import { CheckTask, DeleteTask } from "../../store/actions/taskActions";

import { Button, ButtonGroup } from "@mui/material";
import { Edit, Delete, Done } from '@mui/icons-material';

export default function Todo({task, setTask}) {

  const dispatch = useDispatch();

  const handleUpdate = () => {
    setTask(task);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }

  const handleCheck = (id) => {
    dispatch(CheckTask(id));
  }
  const handleDelete = (id) => {
    dispatch(DeleteTask(id));
  }

  return (
    <>
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width:"60vw", borderBottom:"1px solid black"}}>
    <div className="one_todo" >
      {task.isCompleted 
      ? (<h3 style={{fontSize: "1.4rem", marginBottom: "0", textDecoration: "line-through"}}>{task.task}</h3>)
      : (<h3 style={{fontSize: "1.4rem", marginBottom: "0"}}>{task.task}</h3>)
    }
      <p style={{marginTop: "0", fontSize: "0.7rem", color: "#c4c4c4"}}>{moment(task.date).fromNow()}</p>
    </div>
    <div style={{marginLeft: "2rem"}}>
      <ButtonGroup size="small">
      <Button onClick={()=> handleCheck(task._id)}>
        {task.isCompleted 
          ? (<Done style={{color: "green"}}/>)
          : (<Done style={{color: "white"}}/>)
        }
      </Button>
        <Button onClick={()=> handleUpdate()}><Edit/></Button>
        <Button style={{color:"red"}} onClick={()=> handleDelete(task._id)}><Delete/></Button>
      </ButtonGroup>
    </div>
    </div>
    </>
  );
}