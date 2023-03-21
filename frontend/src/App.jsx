import './App.css';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
//alerts
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import { loadUser } from './store/actions/authActions';

import Navbar from './components/Navbar/Navbar';
import Todos from './components/Todos/Todos';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';


function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
      <ReactNotifications />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Todos/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
