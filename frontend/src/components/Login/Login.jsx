import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import "./Login.css"

import { login } from "../../store/actions/authActions";

import {Button, TextField} from "@mui/material";

export default function Login() {
  const dispatch = useDispatch();
  const auth= useSelector((state) => state.auth);
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(cred));
    setCred({ email: "", password: "" });
  };

  if (auth._id) return <Navigate to="/" />;

  return (
    <>
    <div className="login">
        <form noValidate style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
          <h2 style={{textAlign: "center"}}>Login</h2>
          <TextField value={cred.email} id="entered-email" autoFocus label="E-mail" sx={{ width: '40vw'}} variant="filled" onChange={(e) => setCred({ ...cred, email: e.target.value })}/>
          <br />
          <TextField value={cred.password}  id="entered-password" type="password" label="Password" sx={{ width: '40vw'}} variant="filled" onChange={(e) => setCred({ ...cred, password: e.target.value })}/>
          <Button type="submit" size="large" style={{borderRadius: "0", alignSelf:"center", marginTop: "1rem"}}  variant="outlined">Login</Button>
        </form>
    </div>
  </>
  );
}
