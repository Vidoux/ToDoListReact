import { createStore } from "redux";

let initialState = {
  noms: "VIDAL Tanguy, BERNARD Hugo, LOPEZ Frédéric, SACKO Julien",
  items : [],
  onlyChecked : false//Show only checked task
};

let nextId = 0;

let reducer = function (state, action) {
  switch (action.type) {
    case "ChangefilterOnlyChecked":
      let checkedState = !state.onlyChecked;
      let newState={
        ...state,
        onlyChecked: checkedState
      };
      console.log(newState);
      return  newState

    case "changeStateElement":
      let newStatebis={
        ...state,
        items: state.items.map(function(item){
          if(item.id === action.index){
            item.checked = !item.checked;
          }
          return item;
        })
      };
      console.log(newStatebis);
      return newStatebis;
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
