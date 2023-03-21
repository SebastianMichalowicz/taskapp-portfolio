import { Store } from "react-notifications-component";
import jwtDecode from "jwt-decode";

const initialState = {
  token: localStorage.getItem("token"),
  username: null,
  email: null,
  _id: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      Store.addNotification({
        title: "Login successfull",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true,
        },
      });
      const userInfo = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        username: userInfo.username,
        email: userInfo.email,
        _id: userInfo._id,
      };
    case "LOAD_USER":
      const userInf = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        username: userInf.username,
        email: userInf.email,
        _id: userInf._id,
      };
    case "REGISTRATION":
      Store.addNotification({
        title: "Registration successfull",
        type: "success",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true,
        },
      });
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        username: user.username,
        email: user.email,
        _id: user._id,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      Store.addNotification({
        title: "To next time!",
        type: "info",
        insert: "bottom",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 4000,
          onScreen: true,
        },
      });
      return {
        token: null,
        username: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
}
