import axios from "axios";
import {url} from "../../api/index";
import { Store } from 'react-notifications-component';

export const userRegistration = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/register`, user)
            .then(token => {
                
                localStorage.setItem("token", token.data);

                dispatch({
                    type: "REGISTRATION",
                    token: token.data,
                })
            })
            .catch(err => {
                console.log(err.response.data);
                Store.addNotification({
                    title: "Someting goes wrong",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    message: err.response.data.message,
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            })
    }
};

export const login = (cred) => {
    const email = cred.email;
    const password = cred.password;
    return (dispatch) => {
      axios
        .post(`${url}/login`, {email, password})
        .then((token) => {
          localStorage.setItem("token", token.data);
  
          dispatch({
            type: "LOGIN",
            token: token.data,
          });
        })
        .catch((err) => {
          console.log(err.response);
          Store.addNotification({
            title: "Someting goes wrong",
            type: "danger",
            insert: "bottom",
            container: "bottom-right",
            message: err.response.data.message,
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
        });
    };
  };
  
  export const logout = () => {
    return (dispatch) => {
      dispatch({
        type: "CLEAR_TASKS",
      });
      
      dispatch({
        type: "LOGOUT",
      });
  
    };
  };

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token;
        if(token) {
            dispatch({
                type: "LOAD_USER",
                token
            })
        } else return null
    }
}