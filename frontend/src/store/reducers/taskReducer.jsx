import { Store } from "react-notifications-component";

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      Store.addNotification({
        title: "Task added!",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      return [action.task.data, ...state];
    case "GET_TASKS":
      return action.tasks.data;
    case "UPDATE_TASK":
      Store.addNotification({
        title: "Task edited!",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      return state.map((task) =>
        task._id === action.task.data._id ? action.task.data : task
      );
    case "CHECK_TASK":
      Store.addNotification({
        title: "Task updated!",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      return state.map((task) =>
        task._id === action.task.data._id ? action.task.data : task
      );
    case "DELETE_TASK":
      Store.addNotification({
        title: "Task deleted",
        type: "info",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      return state.filter((task) =>
        task._id !== action.id
      );
      case "CLEAR_TASKS":
        return [];
    default:
      return state;
  }
}
