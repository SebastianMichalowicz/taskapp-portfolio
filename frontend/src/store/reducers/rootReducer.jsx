import { combineReducers } from "redux";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    auth: authReducer,
});

export default rootReducer;