import React from "react";
import ReactDOM from "react-dom";

import {ToDoListMain} from "./ToDoListMain.js";

import { Provider } from "redux";
import { createStore } from "redux";
import {DATE} from "./action";

let initialState = {  date: new Date(), nom: "le nom", prenom: "le prénom"}
let reducer = function (state, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

let store = createStore(reducer,initialState);

ReactDOM.render(
  <Provider store={store}>  
    <ToDoListMain />
  </Provider>,
  document.getElementById("root")
);
