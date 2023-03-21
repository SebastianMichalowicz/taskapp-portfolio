import React, { useState } from "react";
import "./Registration.css";
import { useDispatch, useSelector } from "react-redux";
import { userRegistration } from "../../store/actions/authActions";
import {Navigate} from "react-router-dom";

import { Button, TextField } from "@mui/material";

export default function Registration() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegistration(user));
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  if(auth._id) return <Navigate to="/"/>;
  
  return (
    <>
      <div className="registration">
        <form
          noValidate
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ textAlign: "center" }}>Registration</h2>
          <TextField
            value={user.username}
            autoFocus
            id="username"
            label="Username"
            sx={{ width: "40vw" }}
            variant="filled"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <br />
          <TextField
            value={user.email}
            id="email"
            label="E-mail"
            sx={{ width: "40vw" }}
            variant="filled"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <br />
          <TextField
            value={user.password}
            id="password"
            type="password"
            label="Password"
            sx={{ width: "40vw" }}
            variant="filled"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <br />
          <Button
            type="submit"
            size="large"
            style={{
              borderRadius: "0",
              alignSelf: "center",
              marginTop: "1rem",
            }}
            variant="outlined"
          >
            Registration
          </Button>
        </form>
      </div>
    </>
  );
}
