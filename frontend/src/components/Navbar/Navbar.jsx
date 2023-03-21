import React from "react";
import "./Navbar.css";

import {useSelector, useDispatch} from "react-redux";

import { logout } from "../../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Navbar() {
  const navigate = useNavigate();
  const state = useSelector(state => state);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  //logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };


  return (
    
    <>
      <div className="navbar">
        <div className="navbar-left_side">
          <Link to="/">
            <h2 className="logo">TaskApp</h2>
          </Link>
        </div>
        {auth._id 
        ?(<div className="navbar-right_side">
          <Button variant="outlined" onClick={() => handleLogout()}>Logout</Button>
          </div>)
        :(<div className="navbar-right_side">
          
        <Button variant="outlined">
        <Link to="/login">
          Login
          </Link>
        </Button>
        <Button variant="outlined">
          <Link to="/registration">Registration</Link>
        </Button>
        </div>)
      }
      </div>
    </>
  );
}
