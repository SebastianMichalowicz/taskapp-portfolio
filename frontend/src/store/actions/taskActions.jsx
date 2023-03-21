import axios from "axios";
import {url, setHeader} from "../../api/index";
import { Store } from 'react-notifications-component';

export const AddTask= (newTask) => {
    return (dispatch, getState) => {
        const author = getState().auth.username;
        const email = getState().auth.email;
        axios.post(`${url}/todos`, {...newTask, author, email}, setHeader())
            .then(task => {
                dispatch({
                    type: "ADD_TASK",
                    task
                })
            })
            .catch(err => {
                console.log(err.response);
                Store.addNotification({
                    title: "Someting goes wrong",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
            })
    }
};

export const GetTasks = () => {
    return (dispatch) => {
        axios
            .get(`${url}/todos`, setHeader())
            .then(tasks => {
                dispatch({
                    type: "GET_TASKS",
                    tasks
                })
            })
            .catch(err => {
                console.log(err.response);
                Store.addNotification({
                    title: "Someting goes wrong",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
            })
    }
};

export const UpdateTask = (updatedTask, id) => {
    return (dispatch) => {
        axios
            .put(`${url}/todos/${id}`, updatedTask, setHeader())
            .then(task => {
                dispatch({
                    type: "UPDATE_TASK",
                    task
                })
            })
            .catch(err => {
                console.log(err.response);
                Store.addNotification({
                    title: "Someting goes wrong",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
            })
    }
};

export const CheckTask = (id) => {
    return (dispatch) => {
        axios
            .patch(`${url}/todos/${id}`, {}, setHeader())
            .then(task => {
                dispatch({
                    type: "CHECK_TASK",
                    task
                })
            })
            .catch(err => {
                console.log(err.response);
                Store.addNotification({
                    title: "Someting goes wrong",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
            })
    }
};

export const DeleteTask = (id) => {
    return (dispatch) => {
        axios
            .delete(`${url}/todos/${id}`, setHeader())
            .then(() => {
                dispatch({
                    type: "DELETE_TASK",
                    id
                })
            })
            .catch(err => {
                console.log(err.response);
                Store.addNotification({
                    title: "Someting goes wrong",
                    message: "teodosii@react-notifications-component",
                    type: "danger",
                    insert: "bottom",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 2000,
                      onScreen: true
                    }
                  });
            })
    }
};