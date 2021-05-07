import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

import { Provider } from "redux";
import { createStore } from "redux";
import { ADD_ITEMS } from "./actions.js";

let store = createStore(function (state, action) {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.value];
      }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
