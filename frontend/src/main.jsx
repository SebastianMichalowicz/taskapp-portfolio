import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux"; //should be replaced with configureStore from Redux Toolkit - check later
import thunk from "redux-thunk";

import rootReducer from "./store/reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store= { store }>
      <App />
    </Provider>
  </React.StrictMode>
);