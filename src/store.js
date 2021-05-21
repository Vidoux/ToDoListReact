import { createStore } from "redux";

let initialState = {
  date: new Date(),
  nom: "le nom",
  prenom: "le prénom",
  items : []
};

let nextId = 0;

let reducer = function (state, action) {
  switch (action.type) {
    case "changeStateElement":
      console.log("change state", action);
      let newState={
        ...state,
        items: state.items.map(function(item){
          if(item.id === action.index){
            item.checked = !item.checked;
          }
          return item;
        })
      };
      console.log(newState);
      return newState;
    case "addTodo":
      nextId += 1;
      action.item.id = nextId;
      return{
        ...state,
          items: [...state.items, action.item]
      };
    default:
      return {
        ...state,
      };
  }
};

export default createStore(reducer, initialState);
