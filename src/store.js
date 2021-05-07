import { createStore } from "redux";

let initialState = {
  date: new Date(),
  nom: "le nom",
  prenom: "le prénom",
};

let reducer = function (state, action) {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default createStore(reducer, initialState);
